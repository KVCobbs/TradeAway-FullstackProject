const express = require('express')
const router = express.Router()
const postcontrols = require('../controllers/postcontrollers')

//HOME SCREEN
// router.get('/', postcontrols.home)


//GET ALL POSTS
router.get('/posts', postcontrols.getAllPosts)


//GET SINGLE POST
router.get('/posts/:id', postcontrols.getSinglePost)


//MAKE NEW POST
router.post('/posts', postcontrols.createNewPost)


//UPDATE EXISTING POST
router.put('/posts/:id', postcontrols.updatePost)


//DELETE EXISTING POST
router.delete('/posts/:id', postcontrols.deletePost)

module.exports = router