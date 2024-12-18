const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('combine-css', function () {
  return gulp
    .src('./styles/*.css') // Include all CSS files in the folder
    .pipe(concat('main.css')) // Combine them into main.css
    .pipe(gulp.dest('./css/')); // Output main.css to the css folder
});
