const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    topicName: {
        type: String,
    },
    topicDescription: {
        type: String,
    },
    topicPoints: [
        {
            type: mongoose.Schema.Types.Mixed, // Allows both strings and objects
            default: []
        }
    ],
    topicImages: {
        type: String,
    }
},{timestamps: true });

const Notes = mongoose.model("notes", notesSchema);

module.exports = Notes;