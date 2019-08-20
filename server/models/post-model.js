const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: String,
  animal: String,
  date: Date,
  time: String,
  content: String,
  comments: [] 
})

const Post = mongoose.model('post', postSchema);

module.exports = Post