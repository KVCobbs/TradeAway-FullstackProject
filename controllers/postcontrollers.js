const postmodels = require('../models/postmodels')


//HOME SCREEN
// const home = async(req, res) => {
//   res.send('This is our screen working')
// }


//GET ALL POSTS
const getAllPosts = async(req, res) => {
  let selectAllPosts = await postmodels.getAllPostsDB()
  res.status(200).json(selectAllPosts)
}


//GET SINGLE POST
const getSinglePost = async(req, res) => {
  let selectSinglePost = await postmodels.getSinglePostDB()
  res.status(200).json(selectSinglePost)
}


//MAKE NEW POST
const createNewPost = async(req, res) => {
  let makeNewPost = await postmodels.createNewPostDB()
  res.status(200).json(makeNewPost)
}


//UPDATE EXISTING POST
const updatePost = async(req, res) => {
  let fixPost = await postmodels.updatePostDB()
  res.status(200).json(fixPost)
}


//DELETE EXISTING POST
const deletePost = async(req, res) => {
  let destroyPost = await postmodels.deletePostDB()
  res.status(200)
}

module.exports = {
  getAllPosts,
  getSinglePost,
  createNewPost,
  updatePost,
  deletePost
}
