const router = require('express').Router();
const Post = require('../models/post-model');
const verifyAnimal = require('../functions/verifyAnimal');
const checkAuth = require('../functions/checkAuth');


router.get('/', checkAuth, (req, res) => {
  const { animal } = req.userData.body
  Post.find({ animal }).sort({ date: -1 })
    .then((posts) => {
      return res.status(200).json({
        data: posts
      })
    }).catch((err) => {
      console.log(err);
      return res.status(500).json({
        message: 'There was an error'
      })
    })
})

router.post('/new', checkAuth, (req, res) => {
  const { animal, username, icon } = req.userData.body;
  const content = req.body.content;
  const date = req.body.date;
  new Post({
    icon,
    username,
    animal,
    date,
    content,
  }).save()
    .then((response) => {
      console.log(response);
      return res.status(200).json({
        message: 'Post successfully',
        content: response
      })
    }).catch((err) => {
      console.log(err)
      return res.status(500).json({
        message: 'There was an error'
      })
    })
})

router.post('/comment', checkAuth, async (req, res) => {
  const { animal, username, icon } = req.userData.body;
  const _id = req.body.commentId;
  const content = req.body.content

  if (await verifyAnimal(animal, _id)) {
    Post.findOneAndUpdate({ _id }, {
      $push: {
        comments: {
          icon,
          username,
          content,
          animal,
          date: new Date().toString(),
        }
      }

    }, {
        new: true
      }).then((response) => {
        const {comments} = response;
        return res.status(200).json({
          message: 'Comment added successfully',
          data: comments[comments.length - 1]
        })
      }).catch((err) => {
        console.log(err)

        return res.status(500).json({
          message: 'There was an error'
        })
      })
  } else {
    return res.status(400).json({
      message: `You're not authorized to do this`
    })
  }
})

router.get('/comment/:id', async (req, res) => {
  const _id = req.params.id;

  Post.findOne({ _id })
    .then((currentPost) => {
      res.status(200).json({
        data: currentPost
      })
    }).catch((err) => {
      console.log(err);
      res.status(500).json({
        message: 'There was an error'
      })
    })
})

router.get('/comment', checkAuth, (req, res) => {
  const { animal } = req.userData.body;
  console.log(animal);
  Post.find({ animal }).select('comments')
    .then((comments) => {
      res.status(200).json({
        data: comments
      })
    }).catch((err) => {
      console.log(err);
      res.status(500).json({
        message: 'There was an error'
      })
    })
})



module.exports = router;