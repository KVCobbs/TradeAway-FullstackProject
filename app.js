const express = require("express");
const cors = require('cors');
const app = express();
const dbpool = require('./dbconfig')
const userRouter = require("./routes/userroutes")
const blogRouter = require('./routes/blogroutes')


//This is the Port
const PORT = 3000

//add middleware here
app.use(express.json())
app.use(cors());
// app.use("/users", userRouter)
// app.use("/blogs", blogRouter)


app.get('/', (req, res) => {
    res.status(200).send('hello')
})

app.post('/signup', (req, res) => {
    const {username, password} = req.body
    const newUser = dbpool.query('INSERT INTO users (user_name, user_password) VALUES ($1, $2) RETURNING *', [username, password]).then(results => results.rows[0])
    res.status(200).json(newUser)
})

app.post('/login', (req, res) => {
    const {username, password} = req.body
    const checkUser = dbpool.query('SELECT * FROM users WHERE user_name = $1', [username]).then(results => results.rows)
    if(checkUser.length === 0){
        res.status(404)
    }
    const checkPassword = dbpool.query('SELECT user_password FROM users WHERE user_password = $1', [password]).then(results => results.rows[0])
    if(checkPassword !== password){
        res.status(404)
    } else {
        res.status(200)
        res.json({message: "success"})
    }
})


//LISTEN TO PORT
app.listen(PORT, () => {
    console.log('Rev up them servers!')
}) 