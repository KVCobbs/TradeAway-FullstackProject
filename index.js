const express = require("express");
const app = express();
//exporting 
const { posts, createPosts } = require("./example")
//This is the router
const PORT = 3000
//use the router
//add middleware here
app.use(express.json())


//home screen
app.get('/',(req,res) => {
    res.send('This is our screen working')
})

//get all posts
app.get('/posts', (req,res) => {
    res.json(posts)
})

//new post 
app.post('/posts',(req,res) => {
    let newPost = createPosts(req.body.description)
    posts.push(newPost)
    res.json(newPost)
}) 

//get a specific post
app.get('/posts/:postId', (req,res) => {
    let id = parseInt(req.params.postId);
    let iteration = posts.find(post => post.id === id)
    res.json(iteration)
})

//update(put) a post
app.put('/posts/:postId', (req,res) => {
    let id = parseInt(req.params.postId);
    let iteration = post.find(post => post.id === id);
    res.json(iteration)
}) 

//delete request 
app.delete('/posts/:postId', (req, res) => {
    let id = parseInt(req.params.postId)
    let deleteiteration = posts.findIndex(post => post.postId === id)
    posts.splice(deleteiteration, 1)
    res.json(posts)
})

app.listen(PORT, () => {
    console.log('Rev up them servers!')
}) 