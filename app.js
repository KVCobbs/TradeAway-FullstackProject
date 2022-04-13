const express = require("express");
const app = express();
const blogRouter = require('./routes/blogroutes')
const userRouter = require("./routes/userroutes")


//This is the Port
const PORT = 3000

//add middleware here
app.use(express.json())
app.use(userRouter)
app.use(blogRouter)



//LISTEN TO PORT
app.listen(PORT, () => {
    console.log('Rev up them servers!')
}) 