const User = require('../models/user-model');

module.exports = checkIfEmailExists = (email) => {
  return User.findOne({ email })
    .then((currentUser) => {
      if (currentUser) return true
      return false
    }).catch((err) => {
      console.log(err)
      return false
    })
}