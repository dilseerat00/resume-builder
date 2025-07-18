import User from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign({id: userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'})
}

//Register User Function
//This function handles user registration
export const registerUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        if(password.length < 6) {
            return res.status(400).json({ success:false, message: "Password must be at least 6 characters long" });
        }
        //Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = await User.create({
            name,
            email,
            phone,
            password: hashedPassword
        });
        res.status(201).json({
            _id: user._id, //mongodb id
            name: user.name,
            email: user.email,
            phone: user.phone,
            token: generateToken(user._id)
        }); 
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

//Login User Function
//This function handles user login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.status(201).json({
            success: true,
            _id: user._id, //mongodb id
            name: user.name,
            email: user.email,
            phone: user.phone,
            token: generateToken(user._id)
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal server error",
            error: error.message
        });
    }
}

//Get User Profile Function
//This function retrieves the user profile
export const getUserProfile = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming req.user is set by authentication middleware
        const user = await User.findById(req).select("-password"); // Exclude password from response

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal server error",
            error: error.message
        });
    }
}