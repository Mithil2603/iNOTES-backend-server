const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");

// Create a new note
router.post("/", async (req, res) => {
    try {
        const newNote = new Notes(req.body);
        await newNote.save();
        res.json({ status: 'success', note: newNote });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all notes for a specific subject
router.get("/:subject", async (req, res) => {
    try {
        const notes = await Notes.find({ subject: req.params.subject });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a note
router.patch("/:id", async (req, res) => {
    try {
        const updatedNote = await Notes.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ status: 'success', note: updatedNote });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a note
router.delete("/:id", async (req, res) => {
    try {
        await Notes.findByIdAndDelete(req.params.id);
        res.json({ status: 'success' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
