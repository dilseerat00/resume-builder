import User from "../models/usermodel.js";
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
    try{
        let token;
        console.log("Headers:", req.headers);

        // Check if token is present in headers
        if (req.headers.authorization&& req.headers.authorization.startsWith("Bearer")) {
            // Extract token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find user by ID
            req.user = await User.findById(decoded.id).select("-password");
            next();
        }
         else {
            console.error("No token provided");
            return res.status(401).json({ message: "Not authorized, no token" });
        }
    }
        catch (error) {
            return res.status(401).json({ message: "Not authorized, token failed" ,
            error: error.message
            });
        }
    }