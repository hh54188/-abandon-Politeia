## TODO

### High Priority

- 初始化iscroll
- "加载更多"按钮的脚本功能
- 字体修正
- 自定义滚动栏
- 分享按钮
- autoprefix


### Lower Priority

- 把jQuery替换成.slim版本或者是zepto版本
- 垂直居中样式 + clear-float 集中整理
- 模板归类文件夹

## 页面总结

1. 【完成】主页（home）
    - 脚本：carousel，layload（banner + 图书封面）
2. 【完成】类别页（catrgoeylist）
    - 无任何脚本
3. 【完成，待测试】图书列表页面（booklist）
    - 图书封面lazyload，加载更多图书
4. 【完成，能不能改成post同步请求？】搜索页面（search）
5. 【未完成】评论详情（commentdetail）
    - 【未完成】分享按钮功能
    - 【未完成】喜欢按钮
6. 【未完成，虽然是post，但能不能改成post同步页面】撰写评论页面（writecomment）
    - 计算字数脚本
    - 提交评论（post）
7. 【未完成】评论类表（commentlist）
    - 加载更多评论
8. 【未完成】书架列表（bookshelf）
9. 【未完成】图书详情（bookdetail）
10. 回到顶部

## 兼容性可能存在问题的样式：

- flex
- line-clamp

## Required Modules

```javascript
npm install -g gulp-cli
```

```javascript
npm install -g less
```

```javascript
npm install -g bower
```

```javascript
npm install
```

```javasacript
bower install
```

## Tutorial

- line-clamp
    - http://hackingui.com/front-end/a-pure-css-solution-for-multiline-text-truncation/

- css3 art
    - http://enjoycss.com/

- css3 gif animation
    - http://tobiasahlin.com/spinkit/
    - https://projects.lukehaas.me/css-loaders/

- lazyload
    - http://luis-almeida.github.io/unveil/

- nunjucks + gulp:
    - https://zellwk.com/blog/nunjucks-with-gulp/

- css3 book cover
    - http://srobbin.com/blog/3d-css-book-covers/
    - https://tympanus.net/codrops/2013/07/11/animated-books-with-css-3d-transforms/

- vertical center:
    - https://css-tricks.com/centering-css-complete-guide/

- flexbox tutorial
    - https://css-tricks.com/snippets/css/a-guide-to-flexbox/



