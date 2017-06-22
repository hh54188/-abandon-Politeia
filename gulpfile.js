var gulp = require('gulp');
var path = require('path');
var nunjucksRender = require('gulp-nunjucks-render');
var webserver = require('gulp-connect');
var less = require('gulp-less');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var data = require('gulp-data');
var proxy = require('http-proxy-middleware');
var child_process = require('child_process');

gulp.task('dev', ['copy', 'watch', 'compile template', 'dev web server', 'compile less', 'concat css']);
var outputRootPath = path.join(__dirname, 'releases');

gulp.task('copy', () => gulp
  .src(path.join(__dirname, 'src', 'scripts', 'plugins', '*.js'))
  .pipe(gulp.dest('./bower_components'))
);

var templateOuputFolderPath = path.join(outputRootPath, 'pages');
gulp.task('compile template', function () {
    return gulp.src(path.join(__dirname, 'src', 'pages', '*.nunjucks'))
        .pipe(data(function() {
            return {
                data: ''
            }
        }))
        .pipe(nunjucksRender({
            path: [path.join(__dirname, 'src', 'templates')]
        }))
        .pipe(gulp.dest(templateOuputFolderPath));
});

var webserverRootPath = path.join(__dirname);
gulp.task('dev web server', function () {
    child_process.fork('server.js');
    webserver.server({
        root: webserverRootPath,
        middleware: function(connect, opt) {

            var apiProxy = proxy('/api', {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true
            });

            return [apiProxy];
        }  
    });
});

var styleOutputDirPath = path.join(outputRootPath, 'styles');
gulp.task('compile less', function () {
    return gulp.src(path.join(__dirname, 'src', 'styles', 'main', '*.less'))
        .pipe(less({
            paths: [path.join(__dirname, 'src', 'styles', 'includes')]
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest(styleOutputDirPath));
});

var templatesDirs = [path.join(__dirname, 'src', 'templates', '**', '*.nunjucks'), path.join(__dirname, 'src', 'pages', '*.nunjucks')];
var lessDirs = [path.join(__dirname, 'src', 'styles', '**', '*.less')];
var scriptPluginsDirs = [path.join(__dirname, 'src', 'scripts', 'plugins', '*.js')];
gulp.task('watch', function () {
    gulp.watch(templatesDirs, ['compile template']);
    gulp.watch(lessDirs, ['compile less']);
    gulp.watch(scriptPluginsDirs, ['copy']);
});

gulp.task('concat css', function () {
    return gulp.src([path.join(__dirname, 'releases', 'styles', 'index.css'), path.join(__dirname, 'node_modules', 'normalize.css', 'normalize.css')])
        .pipe(concat('index.css'))
        .pipe(gulp.dest(styleOutputDirPath));
});

