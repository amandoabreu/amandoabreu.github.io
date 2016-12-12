const gulp = require('gulp');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const scssFiles = 'scss/**/*.scss';
const cssFiles = 'css/**/*.css';
const uglify = require('gulp-uglifyjs');
var awspublish = require('gulp-awspublish');
const fs = require("fs");

var config = JSON.parse(fs.readFileSync('./../private/accesskeys.json'));

gulp.task('publish', function() {

    // create a new publisher using S3 options
    // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
    var publisher = awspublish.create(
        config, {
            cacheFileName: './awscache'
        });

    // define custom headers
    var headers = {
        'Cache-Control': 'max-age=315360000, no-transform, public'
        // ...
    };

    return gulp.src('./images/**/*.(css|png|jpg)')

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
        .pipe(publisher.publish(headers))

        // create a cache file to speed up consecutive uploads
        .pipe(publisher.cache())

        // print upload updates to console
        .pipe(awspublish.reporter());
});


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

gulp.task('default', ['css', 'js', 'publish'], function() {
    gulp.watch('scss/**/*.scss',['css']);
    gulp.watch('js/**/*.js', ['js']);
    gulp.watch('images/**/**/*.(css|png|jpg)', ['publish']);
});