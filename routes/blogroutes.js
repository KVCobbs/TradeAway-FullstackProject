const express = require('express')
const router = express.Router()
const blogcontrols = require('../controllers/blogcontrollers')

//HOME SCREEN
router.get('/home2', blogcontrols.home2)


//GET ALL POSTS
router.get('/blog', blogcontrols.getAllBlogs)


//GET SINGLE POST
router.get('/blogs/:id', blogcontrols.getSingleBlogs)


//MAKE NEW POST
router.post('/blog', blogcontrols.createNewBlog)


//UPDATE EXISTING POST
router.put('/blogs/:id', blogcontrols.updateBlog)


//DELETE EXISTING POST
router.delete('/blogs/:id', blogcontrols.deleteBlog)

module.exports = router