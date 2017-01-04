var gulp = require('gulp');
var sass = require('gulp-sass');
// var exec = require('child_process').exec;

gulp.task('default', ['scss', 'scss:watch']);
// gulp.task('default', ['scss', 'scss:watch', 'app']);
//
// gulp.task('app', function (cb) {
//   exec('node app.js', function (err, stdout, stderr) {
//     cb(err);
//   });
// });


gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./scss/**/*.scss', ['scss']);
});
