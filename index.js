const express = require("express");
const app = express();
//This is the router

const PORT = 3000

//use the router
app.use(express.json())

app.listen(PORT, () => {
    console.log('Rev up them servers!')
}) 