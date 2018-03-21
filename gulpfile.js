
var gulp = require('gulp');
var ejs = require('gulp-ejs');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');

gulp.task('ejs', function () {
    return gulp.src(['src/ejs/*.ejs', '!src/ejs/_*.ejs'])
        .pipe(ejs())
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
    return gulp.src(['src/sass/*.scss', 'src/sass/**/*.scss'])
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['iOS 7', 'android 2.1']
        }))
        .pipe(gulp.dest('dist/css/'));
});

// gulp.task('cssmin', function () {
//     return gulp.src('dist/css/*.css')
//         .pipe(cssmin())
//         .pipe(gulp.dest('dist/css'));
// });

gulp.task('copy', function () {
    return gulp.src(['src/js/**', 'src/images/**'], { base: 'src' })
        .pipe(gulp.dest('dest'));
});

// gulp.task('uglify', function () {
//     return gulp.src(['dist/js/*.js'])
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js/'));
// });

gulp.task('server', function () {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

//watch
gulp.task("default", ["ejs", "sass", "copy", "server"], function () {
    gulp.watch("src/ejs/**/*.ejs", ["ejs"]);
    gulp.watch("src/sass/**/*.scss", ["sass"]);
    gulp.watch("src/js/**/*.js", ["copy"]);
    gulp.watch("src/images/**/*", ["copy"]);
});