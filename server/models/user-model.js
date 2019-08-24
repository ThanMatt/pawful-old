const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  icon: String,
  username: String,
  email: String,
  password: String,
  animal: String,
  birthday: String,
  isVerified: Boolean
})

const User = mongoose.model('user', userSchema);

module.exports = User;