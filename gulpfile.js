var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass',function(){
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass({
                errLogToConsole: true,
                outputStyle: 'expanded'
            }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
});

gulp.task('default',function(){
    gulp.watch('./scss/**/*.scss',['sass']);
    gulp.start('sass');
});
