'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('css', ['clean'], function () {
  return gulp.src('src/css/index.css')
    .pipe($.postcss([
      require('postcss-import'),
      require('postcss-url')({url: 'rebase'}),
      require('postcss-copy-assets')({base: 'dist'})
    ], {
      to: 'dist/css/index.css'
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['css']);
