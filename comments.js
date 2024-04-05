//Create web server
const express = require('express');
const app = express();
app.use(express.json());

//Create an array to store comments
const comments = [
    { id: 1, author: 'John', body: 'Comment 1' },
    { id: 2, author: 'Jane', body: 'Comment 2' },
    { id: 3, author: 'Jack', body: 'Comment 3' }
];

//Create a route to get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

//Create a route to get a specific comment
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found');
    res.send(comment);
});

//Create a route to create a new comment
app.post('/comments', (req, res) => {
    if (!req.body.author || !req.body.body) {
        return res.status(400).send('Author and body are required');
    }
    const comment = {
        id: comments.length + 1,
    };
    comment.author = req.body.author;
    comment.body = req.body.body;
    comments.push(comment);
    res.send(comment);
});