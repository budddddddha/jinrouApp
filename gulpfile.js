var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var react = require('gulp-react');
var babel = require('gulp-babel');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

var $ = gulpLoadPlugins();

gulp.task('babel', function() {
  gulp.src("**/*.es6")
    .pipe($.babel({compact: false}))
    .pipe(gulp.dest('./'))
});

gulp.task("default", function() {
    gulp.watch(["**/*.es6"],["babel"]);
});
