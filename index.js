const express = require("express");
const app = express();
const postRouter = require('./routes/postroutes')


//This is the Port
const PORT = 3000

//add middleware here
app.use(express.json())
app.use(postRouter)

//LISTEN TO PORT
app.listen(PORT, () => {
    console.log('Rev up them servers!')
}) 