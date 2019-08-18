const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

passport.use('login',
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email })
      .then(async (currentUser) => {
        if (!currentUser) {
          return done(null, false, { message: 'The email you entered does not exist' })
        }

        try {
          if (!await bcrypt.compare(password, currentUser.password)) {
            return done(null, false, { message: 'Incorrect password' })
          }
          return done(null, currentUser);
        } catch (err) {
          return done(err, false, { message: 'There was an error' })
        }
      }).catch((err) => {
        console.log(err);
        return done(err, false, { message: 'There was an error' })
      })
  })
)