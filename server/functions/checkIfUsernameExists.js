const User = require('../models/user-model');

module.exports = checkIfUsernameExists = (username) => {
  return User.findOne({ username })
    .then((currentUser) => {
      if (currentUser) return true
      return false
    }).catch((err) => {
      console.log(err)
      return false
    })
}