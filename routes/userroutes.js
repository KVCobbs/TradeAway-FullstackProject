const express = require('express')
const router = express.Router();
const userController = require('../controllers/usercontrollers')

//Router
router.get('/home', (req,res) => {
res.send('HELLO BABIES')
})

module.exports = router