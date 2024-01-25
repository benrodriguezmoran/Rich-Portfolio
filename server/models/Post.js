const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: String,
  author: String,
  timestamp: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
