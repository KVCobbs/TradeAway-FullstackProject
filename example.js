let id = 0
const posts = [createPosts("my first post!"), createPosts("my second post!")];

// This is a helper function you should use to create new todos for you
function createPosts(description) {
  id++; // This auto increments the id like a real DB would
    return {
    id,
    description,
    };
}

module.exports = {
    posts,
    createPosts,
};