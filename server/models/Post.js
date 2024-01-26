const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    _id: ID,
    type: String,
    required: true,
  },
  author: {
    _id: ID,
    type: String,
    required: true,
  },
  Date: { 
    type: Date, default: Date.now 
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
