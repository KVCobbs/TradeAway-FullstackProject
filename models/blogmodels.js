const dbpool = require('../dbconfig')

//GET ALL BLOGS
function getAllBlogsDB(){
  return dbpool.query('SELECT * FROM blogs').then(results => results.rows)
}


//GET ALL BLOGS FROM A SINGLE USER
function getAllBlogsSingleUserDB(blogID){
  return dbpool.query('SELECT * FROM blogs WHERE user_id = $1', [blogID]).then(results => results.rows)
}


//CREATE A BLOG
function createNewBlogDB(userID, blogContent){
  return dbpool.query('INSERT INTO blogs (user_id, content) VALUES ($1, $2) RETURNING *', [userID, blogContent]).then(results => results.rows[0])
}


//UPDATE EXISTING BLOG
function updateBlogDB(blogContent, userID, blogID){
  return dbpool.query('UPDATE blogs SET content = $1 WHERE user_id = $2 AND blog_id = $3 RETURNING *', [blogContent, userID, blogID]).then(results => results.rows[0])
}


//DELETE A BLOG
function deleteOneBlogDB(userID, blogID){
  return dbpool.query('DELETE FROM blogs WHERE user_id = $1 AND blog_id = $2', [userID, blogID])
}


module.exports = {
  getAllBlogsDB,
  getAllBlogsSingleUserDB,
  createNewBlogDB,
  updateBlogDB,
  deleteOneBlogDB
}