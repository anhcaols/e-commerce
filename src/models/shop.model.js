const mongoose = require("mongoose");

const DOCUMENT_NAME = 'Shop';
const COLLECTION_NAME = 'Shops';

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxLength: 150,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive'
  },
  roles: {
    type: Array,
    default: []
  }
}, {
  timestamps: true,
  collation: COLLECTION_NAME
});

module.exports = mongoose.model(DOCUMENT_NAME, userSchema);
