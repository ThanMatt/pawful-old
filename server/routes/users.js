const router = require('express').Router();
const checkAuth = require('../functions/checkAuth');
const isUserVerified = require('../functions/isUserVerified');

router.get('/', checkAuth, async (req, res) => {
  const { username } = req.userData.body;

  res.status(200).json({
    username,
  })
})

router.get('/verify', checkAuth, async (req, res) => {
  const { username } = req.userData.body;
  const isVerified = await isUserVerified(username);

  res.status(200).json({
    isVerified
  })

})

module.exports = router;