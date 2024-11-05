const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    topicName: {
        type: String,
        required: true,
    },
    topicDescription: {
        type: String,
    },
    topicPoints: {
        type: [String],
    }, 
    topicImages: {
        type: String,
    }
},{timestamps: true });

const Notes = mongoose.model("notes", notesSchema);

module.exports = Notes;