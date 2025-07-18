import mongoose from "mongoose";    

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true , unique: true , match: /^[0-9]{10}$/ },
    password: { type: String, required: true }
    },
    {
        timestamps: true
    }
);
export default mongoose.model('User', userSchema);