const gulp = require('gulp');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const scssFiles = 'scss/**/*.scss';

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR', 'safari 5', 'IE 7']
};

var onError = function (err) {
    gutil.beep();
    console.log(err);
};

gulp.task('css', function() {
    gulp.src(['css/**/*']).pipe(gulp.dest('../assets/css'));
    gulp.src(['fonts/**/*']).pipe(gulp.dest('../assets/fonts'));
    gulp.src(['js/**/*']).pipe(gulp.dest('../assets/js'));

    gulp.src([scssFiles])
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('../assets/css'));
});

gulp.task('default',function() {
    gulp.watch('scss/**/*.scss',['css']);
});