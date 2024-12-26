const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  solution: { type: String, required: true },
  tags: { type: [String], default: [] },
  difficulty: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
  relatedLinks: { type: [String], default: [] }
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;