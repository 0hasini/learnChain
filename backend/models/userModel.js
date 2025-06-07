import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    studentId: { type: Number, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['instructor', 'student'], required: true},
    walletAddress: { type: String },
    totalTokens: { type: Number, default: null }
})

const UserModel = mongoose.model('User', userSchema)

export {
    UserModel
};