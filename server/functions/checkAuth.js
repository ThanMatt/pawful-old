const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../../.env' })

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    next()
  } catch (err) {
    return res.status(400).json({
      message: 'You are not authorized to view this'
    })
  }

}