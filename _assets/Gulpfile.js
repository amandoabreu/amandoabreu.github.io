const gulp = require('gulp');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const scssFiles = 'scss/**/*.scss';
const uglify = require('gulp-uglifyjs');
const awspublish = require('gulp-awspublish');
const fs = require("fs");
const merge = require('merge-stream');
const minify = require('gulp-minify-css');
const rename = require('gulp-rename');

var config = JSON.parse(fs.readFileSync('./../private/accesskeys.json'));

gulp.task('upload-images-s3', function() {

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

    return gulp.src(['./images/**/**/*.+(jpg|png)'])

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
        .pipe(publisher.publish(headers))

        // create a cache file to speed up consecutive uploads
        .pipe(publisher.cache())

        // print upload updates to console
        .pipe(awspublish.reporter());
});

gulp.task('upload-assets-s3', function() {
    var publisher = awspublish.create(
        config, {
            cacheFileName: ''
        });
    var headers = {
        'Cache-Control': 'max-age=315360000, no-transform, public'
        // ...
    };
    var options = {
        'force': true
    }
    return gulp.src(['./../assets/**/*.+(css|js)'])
        .pipe(rename(function (path) {
            path.dirname += './../assets';
        }))
        .pipe(publisher.publish(headers,options))
        //.pipe(publisher.cache())
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
    gulp.src(['fonts/**/*']).pipe(gulp.dest('../assets/fonts'));

    var scssStream = gulp.src([scssFiles, 'css/**/*'])
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(concat('scss-files.css'))

    var cssStream = gulp.src(['css/**/*.css'])
        .pipe(concat('css-files.css'));

    var mergedStream = merge(scssStream, cssStream)
        .pipe(concat('main.css'))
        .pipe(minify())
        .pipe(gulp.dest('../assets/css'));

    return mergedStream;


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

gulp.task('clearCache', function() {
    // Still pass the files to clear cache for
    gulp.src('./lib/*.js')
        .pipe(cache.clear());

    // Or, just call this for everything
    cache.clearAll();
});