const express = require('express');
const Note = require('../models/NoteModel');
const router = express.Router();

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new note
router.post('/', async (req, res) => {
  const note = new Note({
    title: req.body.title,
    description: req.body.description,
    solution: req.body.solution,
    tags: req.body.tags,
    difficulty: req.body.difficulty,
  });

  try {
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Export the router
module.exports = router;