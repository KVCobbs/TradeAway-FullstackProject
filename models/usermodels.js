const dbpool = require('../dbconfig')

//GET ALL USERS DATA
function getAllUsersDB(){
  return dbpool.query('SELECT * FROM users').then(results => results.rows)
}


//GET A SINGLE USER'S DATA
function getOneUserDB(userID){
  return dbpool.query('SELECT * FROM users WHERE users.id = $1', [userID]).then(results => results.rows[0])
}


//CREATE A NEW USER
function addNewUserToDB(username, password){
  return dbpool.query('INSERT INTO users(user_name, user_password) VALUES ($1, $2) RETURNING *', [username, password]).then(results => results.rows[0])
}


//UPDATE USER DATA (using .put)
function updateUserDB(username, password, userID){
  return dbpool.query('UPDATE users SET user_name = $1, user_password = $2 WHERE user_id = $3 RETURNING *', [username, password, userID]).then(results => results.rows[0])
}


//DELETE USER DATA
function deleteUserDB(userID){
  return dbpool.query('DELETE FROM users WHERE user_id = $1', [userID])
}


module.exports = {
  getAllUsersDB,
  getOneUserDB,
  addNewUserToDB,
  updateUserDB,
  deleteUserDB
}