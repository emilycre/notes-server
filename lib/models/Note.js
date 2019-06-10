const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true
  },
  body: {
    type: String,
    maxlength: 1028,
    required: true
  }
});

module.exports = mongoose.model('Note', noteSchema);
