// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments data
const comments = require('./comments.json');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get comments by ID
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find((comment) => comment.id === +id);
  res.json(comment);
});

// Get comments by user ID
app.get('/users/:userId/comments', (req, res) => {
  const userId = req.params.userId;
  const userComments = comments.filter(
    (comment) => comment.userId === +userId
  );
  res.json(userComments);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});