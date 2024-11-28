const express = require("express");
const router = express.Router();
const Content = require("../models/Python_code"); // Import the Content model

// Create a new content entry
router.post("/", async (req, res) => {
    try {
        const newContent = new Content(req.body);
        await newContent.save();
        res.json({ status: "success", content: newContent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all content for a specific subject
router.get("/:subject", async (req, res) => {
    try {
        const content = await Content.find({ subject: req.params.subject });
        res.json(content);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a content entry
router.patch("/:id", async (req, res) => {
    try {
        const updatedContent = await Content.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json({ status: "success", content: updatedContent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a content entry
router.delete("/:id", async (req, res) => {
    try {
        await Content.findByIdAndDelete(req.params.id);
        res.json({ status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
