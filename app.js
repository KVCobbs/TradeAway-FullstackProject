const express = require("express");
const cors = require('cors');
const app = express();
const dbpool = require('./dbconfig')
// const userRouter = require("./routes/userroutes")
// const blogRouter = require('./routes/blogroutes')


//This is the Port
const PORT = 3000

//add middleware here
app.use(express.json())
app.use(cors());
// app.use("/users", userRouter)
// app.use("/blogs", blogRouter)
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
// let url = path.join(__dirname, `views`)
// console.log(path.join(__dirname, 'views/login')

app.get('/', (req, res) => {
    res.status(200).send('hello')
})

app.post('/signup', (req, res) => {
    const {username, password} = req.body
    const newUser = dbpool.query('INSERT INTO users (user_name, user_password) VALUES ($1, $2) RETURNING *', [username, password]).then(results => results.rows[0])
    res.status(200).json(newUser)
})

app.get('/login', (req, res) => {
    res.status(200).send('this is login')
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body
    console.log(username, password)
    const checkUser = await dbpool.query('SELECT user_name FROM users WHERE user_name = $1', [username]).then(results => results.rows[0])
    console.log(checkUser)
    if(checkUser.length === 0){
        res.status(404)
    }
    const checkPassword = await dbpool.query('SELECT user_password FROM users WHERE user_password = $1 AND user_name = $2', [password, username]).then(results => results.rows[0].user_password)
    console.log(password, checkPassword)
    if(checkPassword !== password){
        res.status(404)
    } else {
        console.log("reached")
        const options = {
            root: path.join(__dirname, 'views'),
            dotfiles: 'deny',
            headers: {
              'x-timestamp': Date.now(),
              'x-sent': true
            }}
        res.status(200).json({message: "success", username: "username"})
        // res.redirect("http://127.0.0.1:5500/unit-7/TradeAway-FullstackProject/views/blogs.html")
        // res.redirect("/blogs")
        // res.render(`${url}/blogs.html`)
    }
})

app.get('/blogs', (req, res) => {
    res.status(200).send('this is blogs')
})

//LISTEN TO PORT
app.listen(PORT, () => {
    console.log('Rev up them servers!')
}) 