var gulp = require('gulp');
var useref = require('gulp-useref');

gulp.task('useref', function () {
  gulp.src('./src/index.html')
    .pipe(useref({
      noconcat:true
    }))
    .pipe(gulp.dest('./www'));
});