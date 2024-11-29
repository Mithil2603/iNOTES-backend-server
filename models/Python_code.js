const mongoose = require("mongoose");

// Define the schema
const contentSchema = new mongoose.Schema({
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
            type: mongoose.Schema.Types.Mixed, // Allows strings or objects
            default: []
        }
    ],
    topicImages: {
        type: String,
    },
    // Code snippet specific fields
    codeExamples: [
        {
            title: {
                type: String,
            },
            language: {
                type: String,
            },
            code: {
                type: String,
            },
            description: {
                type: String,
            }
        }
    ],
}, { timestamps: true });

// Create and export the model
const Content = mongoose.model("Content", contentSchema);

module.exports = Content;
