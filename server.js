const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = 8000;

app.get('/images/:filename', (req, res) => {
    let filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'releases/sample_images/', filename));
});

const timeout = 0;

// 保存阅读进度
app.get('/api/ebook/save_progress', (req, res) => {
    setTimeout(() => {
        res.send(JSON.stringify({
            "code": 200,
            "msg": "ok",            
        }));
    }, timeout);
})

// 分类图书列表
app.get('/api/ebook/books', (req, res) => {
    setTimeout(() => {
        res.send(fs.readFileSync('./mock_data/books.json', 'utf-8'));
    }, timeout);
});

// 获取图书内容
app.get('/api/ebook/content', (req, res) => {
    setTimeout(() => {
        res.send(fs.readFileSync('./mock_data/book.json', 'utf-8'));
    }, timeout);
})

// 阅读历史记录
app.get('/api/ebook/read_history', (req, res) => {
    setTimeout(() => {
        res.send(fs.readFileSync('./mock_data/books.json', 'utf-8'));
    }, timeout);
});

// 阅读但本书的历史记录
app.get('/api/ebook/read_history_by_book', (req, res) => {
    setTimeout(() => {
        res.send(fs.readFileSync('./mock_data/books.json', 'utf-8'));
    }, timeout);
});

// 购买图书记录
app.get('/api/ebook/bought_books', (req, res) => {
    setTimeout(() => {
        res.send(fs.readFileSync('./mock_data/books.json', 'utf-8'));
    }, timeout);
});

// 借阅的图书记录
app.get('/api/ebook/borrowed_books', (req, res) => {
    setTimeout(() => {
        res.send(fs.readFileSync('./mock_data/books.json', 'utf-8'));
    }, timeout);
});

// 归还图书`
app.get('/api/ebook/return_book', (req, res) => {
    setTimeout(() => {
        res.send(JSON.stringify({
            "code": 200,
            "msg": "ok",
        }));
    }, timeout);
});

// 删除阅读历史
app.get('/api/ebook/remove_history', (req, res) => {
    setTimeout(() => {
        res.send(JSON.stringify({
            "code": 200,
            "msg": "ok",
        }));
    }, timeout);
});

// 评论页-记载更多评论
app.get('/api/ebook/reviews', (req, res) => {
    setTimeout(() => {
        res.send(fs.readFileSync('./mock_data/comments.json', 'utf-8'))
    }, timeout);
});


app.listen(PORT);
console.log('Server Start: http://127.0.0.1:' + PORT);



