import mongoose from "mongoose";    
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dilseeratjassal:ResumeBuilder123@cluster0.2gvnhqu.mongodb.net/RESUME')
    .then(() => console.log("MongoDB connected successfully"))
}