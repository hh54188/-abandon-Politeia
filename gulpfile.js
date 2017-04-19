var gulp = require('gulp');
var path = require('path');
var nunjucksRender = require('gulp-nunjucks-render');
var webserver = require('gulp-connect');
var less = require('gulp-less');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var data = require('gulp-data');

gulp.task('dev', ['watch', 'compile template', 'dev web server', 'compile less', 'concat css']);
var outputRootPath = path.join(__dirname, 'releases');

var templateOuputFolderPath = path.join(outputRootPath, 'pages');
gulp.task('compile template', function () {
    return gulp.src(path.join(__dirname, 'src', 'pages', '*.nunjucks'))
        .pipe(data(function() {
            return {
                data: 'Hello World'
            }
        }))
        .pipe(nunjucksRender({
            path: [path.join(__dirname, 'src', 'templates')]
        }))
        .pipe(gulp.dest(templateOuputFolderPath));
});

var webserverRootPath = path.join(__dirname);
gulp.task('dev web server', function () {
    webserver.server({
        root: webserverRootPath
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
gulp.task('watch', function () {
    gulp.watch(templatesDirs, ['compile template']);
    gulp.watch(lessDirs, ['compile less']);
});

gulp.task('concat css', function () {
    return gulp.src([path.join(__dirname, 'releases', 'styles', 'index.css'), path.join(__dirname, 'node_modules', 'normalize.css', 'normalize.css')])
        .pipe(concat('index.css'))
        .pipe(gulp.dest(styleOutputDirPath));
});

