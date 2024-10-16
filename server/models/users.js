const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

// create current date for created and updated field
usersSchema.pre('save', function (next) {
  this.created = Date.now();
  this.updated = Date.now();
  next();
});

module.exports = mongoose.model('Users', usersSchema);
