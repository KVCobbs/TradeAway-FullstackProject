const blogmodels = require('../models/blogmodels')


//HOME SCREEN
const home2 = async(req, res) => {
  res.send('This is our screen working')
}


//GET ALL BLOGS
const getAllBlogs = async(req, res) => {
  let selectAllBlogs = await blogmodels.getAllBlogsDB()
  res.status(200).json(selectAllBlogs)
}


//GET ALL BLOGS FROM A SINGLE USER
const getAllBlogsSingleUser = async(req, res) => {
  const userID = parseInt(req.params.id)
  let selectSingleBlog = await blogmodels.getAllBlogsSingleUserDB(userID)
  res.status(200).json(selectSingleBlog)
}


//MAKE NEW BLOG
const createNewBlog = async(req, res) => {
  const userID = parseInt(req.params.id)
  const {content} = req.body
  let makeNewBlog = await blogmodels.createNewBlogDB(userID, content)
  res.status(200).json(makeNewBlog)
}


//UPDATE EXISTING BLOG
const updateBlog = async(req, res) => {
  const userID = parseInt(req.params.id)
  const blogID = parseInt(req.params.blogid)
  const {content} = req.body
  let fixBlog = await blogmodels.updateBlogDB(content, userID, blogID)
  res.status(200).json(fixBlog)
}


//DELETE EXISTING BLOG
const deleteBlog = async(req, res) => {
  const userID = parseInt(req.params.id)
  const blogID = parseInt(req.params.blogid)
  let destroyBlog = await blogmodels.deleteOneBlogDB(userID, blogID)
  res.status(200).json(destroyBlog);
}

module.exports = {
  home2,
  getAllBlogs,
  getAllBlogsSingleUser,
  createNewBlog,
  updateBlog,
  deleteBlog
}
