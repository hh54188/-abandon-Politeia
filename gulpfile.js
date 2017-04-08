var gulp = require('gulp');
var path = require('path');
var nunjucksRender = require('gulp-nunjucks-render');
var webserver = require('gulp-connect');
var less = require('gulp-less')

gulp.task('dev', ['compile template', 'dev web server', 'compile less']);
var outputRootPath = path.join(__dirname, 'releases');

var templateFolderPath = path.join(__dirname, 'src', 'templates');
var templateOuputFolderPath = path.join(outputRootPath, 'pages');
gulp.task('compile template', function () {
    return gulp.src(path.join(templateFolderPath, '*.+(html|nunjucks)'))
        .pipe(nunjucksRender({
            path: [templateFolderPath],
            watch: true
        }))
        .pipe(gulp.dest(templateOuputFolderPath));
});

var webserverRootPath = outputRootPath;
gulp.task('dev web server', function () {
    webserver.server({
        root: webserverRootPath,
        livereload: true
    });
});

var lessDirPath = path.join(__dirname, 'src', 'styles');
var styleOutputDirPath = path.join(outputRootPath, 'styles');
gulp.task('compile less', function () {
    return gulp.src(path.join(lessDirPath, '*.less'))
        .pipe(less({
            paths: [lessDirPath]
        }))
        .pipe(gulp.dest(styleOutputDirPath));
});

