const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  icon: String,
  username: String,
  animal: String,
  date: Date,
  content: String,
  comments: [] 
})

const Post = mongoose.model('post', postSchema);

module.exports = Post