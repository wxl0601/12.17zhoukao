

var gulp = require('gulp')

var sass = require('gulp-sass');

var server = require('gulp-webserver');

gulp.task('devScss',function(){
    return gulp.src('./src/scss/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
})

gulp.task('server',function(){
    return gulp.src('src')
    .pipe(server({
        port:8888,
        proxies:[
            {source:'/users/get/train',target:"http://169.254.226.15:3000/users/get/train"}
        ]
    }))
})

gulp.task('watch',function(){
    return gulp.watch('./src/scss/index.scss',gulp.series('devScss'))
})

gulp.task('default',gulp.parallel('devScss','watch','server'))