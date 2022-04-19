const usermodels = require('../models/usermodels')

//home test screen
const home = (req, res) => {
    res.status(200).json('show me something good')
}

//Get ALL Users 
const getAllUsers = async(req, res) => {
    let selectAllUsers = await usermodels.getAllUsersDB()
    res.status(200).json(selectAllUsers)
} 

//Get single user
const getSingleUser = async(req,res) => {
    const userID = parseInt(req.params.id)
    let selectSingleUser = await usermodels.getSingleUserDB(userID)
    res.status(200).json(selectSingleUser)
}

//Create New User 
const createNewUser = async(req,res) => {
    // const {username, password} = req.body
    const username = req.body.user_name
    const password = req.body.user_password
    let createNewUser = await usermodels.createNewUserDB(username, password)
    res.status(200).json(createNewUser)
}

//Update existing user 
const updateUser = async(req, res) => {
    const userID = parseInt(req.params.id)
    const username = req.body.user_name
    const password = req.body.user_password
    let fixUser = await usermodels.updateUserDB(username, password, userID)
    res.status(200).json(fixUser)
}

//delete existing user 
const deleteUser = async(req, res) => {
    const userID = parseInt(req.params.id)
    let destroyUser = await usermodels.deleteUserDB(userID)
    res.status(200).json(destroyUser)
}

module.exports = {
    home,
    getAllUsers,
    getSingleUser,
    createNewUser,
    updateUser,
    deleteUser
}