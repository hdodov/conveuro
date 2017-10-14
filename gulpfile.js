var gulp = require("gulp");
var iife = require("gulp-iife");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

var content_script_src = 'extension/content-script/',
    event_page_src = 'extension/event-page/',
    popup_src = 'extension/popup/';

function sourceTask(name, watchPath, mainFunc) {
    var watching = false;

    gulp.task(name, function () {
        mainFunc();

        if (!watching) {
            gulp.watch(watchPath, [name]);
            watching = true;
        }
    });
}

function sourceTaskJs(name, dir) {
    var filesGlob = dir + '_src/js/*.js';

    sourceTask(name, filesGlob, function () {
        gulp.src([
            dir + '_src/js/_config.js',
            filesGlob
        ])
            .pipe(concat('script.js'))
            .pipe(iife({
                useStrict: true
            }))
            //.pipe(uglify())
            .pipe(gulp.dest(dir + 'js/'));
    });
}

function sourceTaskScss(name, dir) {
    var filesGlob = dir + '_src/scss/*.scss';

    sourceTask(name, filesGlob, function () {
        gulp.src(filesGlob)
            .pipe(sass({
                outputStyle: "nested"
            }))
            .pipe(gulp.dest(dir + 'css/'));
    });
}

sourceTaskJs('event-page:js', event_page_src);
sourceTaskJs('content-script:js', content_script_src);
sourceTaskScss('content-script:scss', content_script_src);
sourceTaskJs('popup:js', popup_src);
sourceTaskScss('popup:scss', popup_src);

gulp.task("default", [
    "event-page:js",
    "content-script:js",
    "content-script:scss",
    "popup:js",
    "popup:scss"
]);