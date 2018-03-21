var gulp = require('gulp');
var ejs = require('gulp-ejs');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var del = require('del');

//ejs
gulp.task('ejs', function () {
    return gulp.src(['src/ejs/**/*.ejs', '!src/ejs/**/_*.ejs'])
        .pipe(ejs())
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest('dist/'));
});

//copy all assets
gulp.task('copyassets', function () {
    return gulp.src(['src/assets/**/*'], { base: 'src/assets' })
        .pipe(gulp.dest('dist/'));
});

//build
gulp.task("build", ["ejs", "copyassets"]);

//watch
gulp.task("watch", function () {
    gulp.watch(['src/**/*',], ['build']);
});

//clean
gulp.task("clean", function () {
    return del(['dist/**/*', '!dist/.gitkeep']);
})

//server
gulp.task("server", function () {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task("default", ["watch", "server"]);