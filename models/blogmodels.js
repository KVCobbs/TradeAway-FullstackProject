const dbpool = require('../dbconfig')

//GET ALL BLOGS
function getAllBlogsDB(){
  return dbpool.query('SELECT * FROM blogs').then(results => results.rows)
}


//GET A SINGLE BLOG
function getOneBlogDB(blogID){
  return dbpool.query('SELECT * FROM blogs WHERE blog_id = $1', [blogID]).then(results => results.rows[0])
}


//CREATE A BLOG
function createNewBlogDB(blogContent){
  return dbpool.query('INSERT INTO blogs (blog_content) VALUES ($1) RETURNING *', [blogContent]).then(results => results.rows[0])
}


//DELETE A BLOG
function deleteOneBlogDB(blogID){
  return dbpool.query('DELETE FROM blogs WHERE blog_id = $1', [blogID])
}


module.exports = {
  getAllBlogsDB,
  getOneBlogDB,
  createNewBlogDB,
  deleteOneBlogDB
}