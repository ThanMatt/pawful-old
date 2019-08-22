const router = require('express').Router();
const checkAuth = require('../functions/checkAuth');

router.get('/', checkAuth, (req, res) => {
  const { username } = req.userData.body;
  console.log(username);

  res.status(200).json({
    username
  })
})
module.exports = router;