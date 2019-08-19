const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const verificationSchema = new Schema({
  email: String,
  verifyToken: String
});

const Verification = mongoose.model('verification', verificationSchema);

module.exports = Verification;