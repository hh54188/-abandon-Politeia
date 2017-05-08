const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/images/:filename', (req, res) => {
    let filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'releases/sample_images/', filename));
});

app.get('/api/ebook/books', (req, res) => {
    setTimeout(() => {
        res.send(fs.readFileSync('./mock_data/books.json', 'utf-8'));
    }, 1000 * 2);
});

// 书架页
app.get('/api/ebook/read_history', (req, res) => {
    setTimeout(() => {
        res.send(fs.readFileSync('./mock_data/books.json', 'utf-8'));
    }, 1000 * 2);
});

app.get('/api/ebook/bought_books', (req, res) => {
    setTimeout(() => {
        res.send(fs.readFileSync('./mock_data/books.json', 'utf-8'));
    }, 1000 * 2);
});

app.get('/api/ebook/borrowed_books', (req, res) => {
    setTimeout(() => {
        res.send(fs.readFileSync('./mock_data/books.json', 'utf-8'));
    }, 1000 * 2);
});

// 评论页-记载更多评论
app.get('/api/ebook/reviews', (req, res) => {
    setTimeout(() => {
        res.send(fs.readFileSync('./mock_data/comments.json', 'utf-8'))
    }, 1000 * 2);
});

app.listen(8000);
console.log('Server Start: http://127.0.0.1:8000');