const Post = require('../models/post-model');

module.exports = verifyAnimal = (animal, postId) => {
  return Post.findOne({animal, _id: postId})
  .then((currentPost) => {
    return currentPost !== null
  }).catch((err) => {
    console.log(err);
    return false
  })
}
