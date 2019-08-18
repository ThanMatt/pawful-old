const router = require('express').Router();
const User = require('../models/user-model');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

require('dotenv').config();

router.get('/', (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users)
    })
})

router.post('/register', async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const animal = req.body.animal;
  const birthday = req.body.birthday

  const saltRounds = 10

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    new User({
      username,
      email,
      password: hashedPassword,
      animal,
      birthday
    }).save().then(() => res.status(200).json({
      message: 'Registration successful!'
    })).catch((err) => {
      console.log(err)
      res.status(500).json({
        message: 'There was an error'
      })
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: 'There was an error. Please reload the page'
    })
  }

})

router.post('/login', (req, res, next) => {
  passport.authenticate('login', (err, user, info) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'There was an error' })
    }
    if (!user) {
      return res.status(400).json({
        message: info.message
      })
    }

    const body = {
      _id: user._id,
      email: user.email,
      username: user.username,
    }

    const idToken = jwt.sign({ body }, process.env.JWT_KEY);
    const userData = {
      email: user.email,
      username: user.username,
      animal: user.animal,
      idToken
    }
    res.json({ userData })
  })(req, res, next)
})

module.exports = router;