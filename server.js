const express = require('express');
const app = express();
const path = require('path');

app.get('/images/:filename', (req, res) => {
    let filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'releases/sample_images/', filename));
});

app.get('/api/ebook/books', (req, res) => {
    setTimeout(() => {
        res.send(JSON.stringify({
            "code": 200,
            "msg": "ok",
            "data":{
                "start": 0,  //传参start
                "count": 10,  //每页结果条数
                "total": 30,  //结果总数
                "list":[
                    {
                        "id": 10001,  //图书ID
                        "name": "看见",  //图书名
                        "author_name": "柴静",  //作者名
                        "desc": "柴静十年央视历程，中国十年社会变迁备忘录",  //图书内容摘要
                        "cate_id":  1, //分类ID
                        "rate_num": 6.5,  //评分
                        "thumb_img": "http://127.0.0.1:8000/images/cover-01.jpg",  //封面图
                    },
                    {
                        "id": 10002,  //图书ID
                        "name": "看见",  //图书名
                        "author_name": "柴静",  //作者名
                        "desc": "柴静十年央视历程，中国十年社会变迁备忘录",  //图书内容摘要
                        "cate_id":  1,  //分类ID
                        "rate_num": 9.5,  //评分
                        "thumb_img": "http://127.0.0.1:8000/images/cover-02.jpg",  //封面图
                    },
                    {
                        "id": 10002,  //图书ID
                        "name": "看见",  //图书名
                        "author_name": "柴静",  //作者名
                        "desc": "柴静十年央视历程，中国十年社会变迁备忘录",  //图书内容摘要
                        "cate_id":  1,  //分类ID
                        "rate_num": 9.5,  //评分
                        "thumb_img": "http://127.0.0.1:8000/images/cover-03.jpg",  //封面图
                    },
                    {
                        "id": 10002,  //图书ID
                        "name": "看见",  //图书名
                        "author_name": "柴静",  //作者名
                        "desc": "柴静十年央视历程，中国十年社会变迁备忘录",  //图书内容摘要
                        "cate_id":  1,  //分类ID
                        "rate_num": 1,  //评分
                        "thumb_img": "http://127.0.0.1:8000/images/cover-04.jpg",  //封面图
                    }
                ]
            }
        }));
    }, 1000 * 2);
})

app.listen(8000);
console.log('Server Start: http://127.0.0.1:8000');