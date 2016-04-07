var gulp = require('gulp');
var wiredep = require('gulp-wiredep');

gulp.task('wiredep', function () {
  gulp.src('./src/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./www'));
});