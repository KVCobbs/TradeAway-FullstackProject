const usermodels = require('../models/usermodels')

//home test screen
const home = (req, res) => {
    res.status(200).json('show me something good')
}

//Get ALL Users 
const getAllUsers = async(req, res) => {
    let selectAllUsers = await postmodels.getAllUsersDB()
    res.status(200).json(selectAllUsers)
} 

//Get single user
const getSingleUser = async(req,res) => {
    let selectSingleUser = await usermodels.getSingleUserDB()
    res.status(200).json(selectSingleUser)
}

//Create New User 
const createNewUser = async(req,res) => {
    let createNewUser = await usermodels.createNewUserDB()
    res.status(200).json(createNewUser)
}

//Update existing user 
const updateUser = async(req, res) => {
    let fixUser = await usermodels.updateUserDB()
    res.status(200).json(fixUser)
}

//delete existing user 
const deleteUser = async(req, res) => {
    let destroyUser = await usermodels.deleteUserDB()
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