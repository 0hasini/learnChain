import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const questionSchema = new Schema({
    authorId: { type: ObjectId, ref: 'User' },
    question: { type: String },
    answer: { type: String },
    reward: { type: Number},
    timestamp: { type: Date, default: Date.now }
})

const QuestionModel = mongoose.model('Question', questionSchema);

export {
    QuestionModel
};