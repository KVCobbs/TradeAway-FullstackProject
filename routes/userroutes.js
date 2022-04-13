const express = require('express')
const router = express.Router();
const userController = require('../controllers/usercontrollers')

//Router
router.get('/home', (req,res) => {
res.send('HELLO BABIES')
})

router.get('/user', userController.getAllUsers)

router.get('/users/:id', userController.getSingleUser)

router.post('/user', userController.createNewUser)

router.put('/users/:id', userController.updateUser)

router.delete('/users/:id', userController.deleteUser)

module.exports = router