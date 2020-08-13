const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const rename      = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "/home/povolochko/udemy_course/verstka/bootstrap_project"
        }
    });
});

// or...

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});

gulp.task('styles', function() {
    return gulp.src("bootstrap_projec*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min"
          }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("bootstrap_projec/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("bootstrap_projec*.+(scss|sass)", gulp.parallel("styles"));
    gulp.watch(".*.html").on("change", browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));