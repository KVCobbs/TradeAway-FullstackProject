const postmodels = require('../models/blogmodels')


//HOME SCREEN
const home2 = async(req, res) => {
  res.send('This is our screen working')
}


//GET ALL POSTS
const getAllBlogs = async(req, res) => {
  let selectAllBlogs = await postmodels.getAllBlogsDB()
  res.status(200).json(selectAllBlogs)
}


//GET SINGLE POST
const getSingleBlogs = async(req, res) => {
  let selectSingleBlog = await postmodels.getSingleBlogsDB()
  res.status(200).json(selectSingleBlog)
}


//MAKE NEW POST
const createNewBlog = async(req, res) => {
  let makeNewBlog = await postmodels.createNewBlogsDB()
  res.status(200).json(makeNewBlog)
}


//UPDATE EXISTING POST
const updateBlog = async(req, res) => {
  let fixBlog = await postmodels.updateBlogDB()
  res.status(200).json(fixBlog)
}


//DELETE EXISTING POST
const deleteBlog = async(req, res) => {
  let destroyPost = await postmodels.deleteBlogDB()
  res.status(200)
}

module.exports = {
  home2,
  getAllBlogs,
  getSingleBlogs,
  createNewBlog,
  updateBlog,
  deleteBlog
}
