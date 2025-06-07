const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const assignmentSchema = new Schema({
    title: { type: String },
    instructorId: { type: ObjectId, ref: 'User'},
    postedAt: { type: Date },
    deadLine: { type: Date }
})

const submissionSchema = new Schema({
    assignmentId: { type: ObjectId, required: true, ref: 'Assignment'},
    studentId: { type: ObjectId, ref: 'User'},
    content: { type: String }, //url
    score: { type: ObjectId, ref: 'Review'},
    timestamp: { type: Date, default: Date.now }
})

const reviewSchema = new Schema({
    submission: { type: ObjectId, ref: 'Submission'},
    scoreGiven: { type: Number},
    timestamp: { type: Date, default: Date.now }    
})

const AssignmentModel = mongoose.model('Assignment', assignmentSchema);
const SubmissionModel = mongoose.model('Submission', submissionSchema);
const ReviewModel = mongoose.model('Review', reviewSchema);

module.exports= {
    AssignmentModel,
    SubmissionModel,
    ReviewModel
}