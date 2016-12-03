const gulp = require('gulp');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const scssFiles = 'scss/**/*.scss';
const cssFiles = 'css/**/*.css';
const uglify = require('gulp-uglifyjs');


var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR', 'safari > 5', 'IE > 7']
};

var onError = function (err) {
    gutil.beep();
    console.log(err);
};

gulp.task('css', function() {
    gulp.src(['css/**/*']).pipe(gulp.dest('../assets/css'));
    gulp.src(['fonts/**/*']).pipe(gulp.dest('../assets/fonts'));

    gulp.src([scssFiles])
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('../assets/css'));
});

gulp.task('js', function() {

    gulp.src('js/*.js')
        .pipe(uglify('main.js'))
        .pipe(gulp.dest('../assets/js'))
});

gulp.task('default', ['css', 'js'], function() {
    gulp.watch('scss/**/*.scss',['css']);
    gulp.watch('js/**/*.js', ['js']);
});