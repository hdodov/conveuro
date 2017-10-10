var gulp = require("gulp");
var iife = require("gulp-iife");
var sass = require("gulp-sass");
var gulpif = require("gulp-if");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var useref = require("gulp-useref");

gulp.task('content_script', function () {
    gulp.src('src/js/content_script/*.js')
        .pipe(concat('content.js'))
        .pipe(gulp.dest('extension'));
});

gulp.task('event_page', function () {
    gulp.src('src/js/event_page/*.js')
        .pipe(concat('background.js'))
        .pipe(gulp.dest('extension'));
});

gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass({
            outputStyle: "nested"
        }))
        .pipe(gulp.dest('extension'));
});

gulp.task("main", function () {
    gulp.watch('src/js/**/*.js', ['content_script', 'event_page']);
    gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task("default", ["main"]);