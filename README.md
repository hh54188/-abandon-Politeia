## 配置环境

1. 前往 http://nodejs.cn/download/ 下载并且最新版本的 NodeJs
2. 安装完毕后将npm镜像设置为淘宝镜像，在控制台中执行命令`npm config set registry https://registry.npm.taobao.org`
3. 安装`bower`模块：`npm install -g bower`
4. 安装`gulp`模块：`npm install -g gulp-cli`
5. 安装`less`模块：`npm install -g less`
6. 安装本项目依赖的Nodejs模块，切换到本项目根目录下运行：`npm install`
7. 安装本项目的Bower模块依赖，切换到本项目根目录下运行：`bower install`

## 编译项目和启动环境
- 切换到根目录下运行：`gulp dev`
- 打开新的控制台，切换到根目录下运行：`npm run vue`
- 浏览器中访问：http://127.0.0.1:8080/releases/pages/ 查看静态页面

## TODO

### High Priority

- 阅读页面
- 分享按钮
- 初始化iscroll
- 需要新增接口 read_history_by_book

### Lower Priority

- autoprefix
- 回到顶部
- 点击加载更多之后，加载并向下滚动
- 把jQuery替换成.slim版本或者是zepto版本
- 垂直居中样式 + clear-float 集中整理
- 模板归类文件夹

## 页面总结


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

- Vue.js/Vuex Tutorial
    - https://www.sitepoint.com/up-and-running-vue-js-2-0/
    - https://medium.freecodecamp.com/vue-js-introduction-for-people-who-know-just-enough-jquery-to-get-by-eab5aa193d77
    - https://coligo.io/learn-vuex-by-building-notes-app/
    - https://coligo.io/learn-vuex-by-building-notes-app/

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



