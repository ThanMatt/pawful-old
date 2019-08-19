const router = require('express').Router();
const User = require('../models/user-model');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');
const Pusher = require('pusher');

const checkIfUsernameExists = require('../functions/checkIfUsernameExists');
const checkIfEmailExists = require('../functions/checkIfEmailExists');

require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: process.env.PUSHER_APP_ENCRYPTED
})

router.get('/', (req, res) => {
  User.find({}).select('username')
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

    if (await checkIfUsernameExists(username)) {
      return res.status(400).json({
        message: 'The username has already been taken'
      })
    }

    if (await checkIfEmailExists(email)) {
      return res.status(400).json({
        message: 'The email has already been taken'
      })
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    User.findOne({})
    new User({
      username,
      email,
      password: hashedPassword,
      animal,
      birthday
    }).save().then((user) => {
      msg = {
        to: email,
        from: 'no-reply@gmail.com',
        subject: `You've registered on Pawful`,
        text: 'testing testin',
        html: '<strong>This is a test message</strong>'
      };
      sgMail.send(msg);

      res.status(200).json({
        message: 'Registration Successful!'
      })

      pusher.trigger('user', 'user-joined', user)
    }).catch((err) => {
      console.log(err)
      res.status(500).json({
        message: 'There was an error. Please reload the page'
      })
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
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