const express = require('express')
const router = express.Router()
const blogcontrols = require('../controllers/blogcontrollers')

//HOME SCREEN
router.get('/home2', blogcontrols.home2)


//GET ALL BLOG
router.get('/blogs', blogcontrols.getAllBlogs)


//GET ALL BLOGS FROM A SINGLE USER
router.get('/blogs/:id', blogcontrols.getAllBlogsSingleUser)


//MAKE NEW BLOG
router.post('/blogs/:id', blogcontrols.createNewBlog)


//UPDATE EXISTING BLOG
router.put('/blogs/:id/:blogid', blogcontrols.updateBlog)


//DELETE EXISTING BLOG
router.delete('/blogs/:id/:blogid', blogcontrols.deleteBlog)

module.exports = router