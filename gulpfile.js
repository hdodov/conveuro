var gulp = require("gulp");
var iife = require("gulp-iife");
var sass = require("gulp-sass");
var gulpif = require("gulp-if");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task('content_script', function () {
    gulp.src([
        'src/js/content_script/_config.js',
        'src/js/content_script/*.js'
    ])
        .pipe(concat('content.js'))
        .pipe(iife({
            useStrict: true
        }))
        //.pipe(uglify())
        .pipe(gulp.dest('extension/js'));
});

gulp.task('event_page', function () {
    gulp.src('src/js/event_page/*.js')
        .pipe(concat('background.js'))
        .pipe(iife({
            useStrict: true
        }))
        //.pipe(uglify())
        .pipe(gulp.dest('extension/js'));
});

gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass({
            outputStyle: "nested"
        }))
        .pipe(gulp.dest('extension/css'));
});

gulp.task("main", function () {
    gulp.watch('src/js/content_script/*.js', ['content_script']);
    gulp.watch('src/js/event_page/*.js', ['event_page']);
    gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task("default", [
    "content_script",
    "event_page",
    "sass",
    "main"
]);