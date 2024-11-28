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
                type: String, // Title of the code snippet
                required: true,
            },
            language: {
                type: String, // Programming language (e.g., "python", "javascript")
                required: true,
            },
            code: {
                type: String, // The actual code
                required: true,
            },
            description: {
                type: String, // A short description of the code snippet
            }
        }
    ],
}, { timestamps: true });

// Create and export the model
const Content = mongoose.model("Content", contentSchema);

module.exports = Content;
