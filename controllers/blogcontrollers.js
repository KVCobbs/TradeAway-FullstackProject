const blogmodels = require('../models/blogmodels')


//HOME SCREEN
const home2 = async(req, res) => {
  res.send('This is our screen working')
}


//GET ALL POSTS
const getAllBlogs = async(req, res) => {
  let selectAllBlogs = await blogmodels.getAllBlogsDB()
  res.status(200).json(selectAllBlogs)
}


//GET SINGLE POST
const getSingleBlogs = async(req, res) => {
  let selectSingleBlog = await blogmodels.getSingleBlogsDB()
  res.status(200).json(selectSingleBlog)
}


//MAKE NEW POST
const createNewBlog = async(req, res) => {
  let makeNewBlog = await blogmodels.createNewBlogsDB()
  res.status(200).json(makeNewBlog)
}


//UPDATE EXISTING POST
const updateBlog = async(req, res) => {
  let fixBlog = await blogmodels.updateBlogDB()
  res.status(200).json(fixBlog)
}


//DELETE EXISTING POST
const deleteBlog = async(req, res) => {
  let destroyBlog = await blogmodels.deleteBlogDB()
  res.status(200).json(destroyBlog);
}

module.exports = {
  home2,
  getAllBlogs,
  getSingleBlogs,
  createNewBlog,
  updateBlog,
  deleteBlog
}
