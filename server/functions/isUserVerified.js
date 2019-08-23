const User = require('../models/user-model');

module.exports = isUserVerified = (username) => {
  return User.findOne({ username })
    .then((currentUser) => {
      return currentUser.isVerified
    }).catch((err) => {
      console.log(err)
    })
}