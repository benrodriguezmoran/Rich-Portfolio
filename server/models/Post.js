const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  Date: { 
    type: Date, default: Date.now 
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
