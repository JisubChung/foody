var gulp = require('gulp'),         // look into node_modules for a folder named "gulp"
    sass = require('gulp-sass'),    // sass, so much faster than gems
    browserSync = require('browser-sync').create(), //now we talking!
    useref = require('gulp-useref'),  // combine js in right order
    uglify = require('gulp-uglify'),  // minify
    gulpIf = require('gulp-if'),      // minify only what we want!
    cssnano = require('gulp-cssnano'),// minify css
    del = require('del'),             // deletes; like for outdated dist
    runSequence = require('run-sequence'),// makes sure order is kept
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),     // utilities
    autoPrefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(plumber(function(error) {
        gutil.log(gutil.colors.red(error.message));
        this.emit('end');
    }))
    .pipe(sass())
    .pipe(autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'fonts'],
    callback
  )
})

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reload whenever the HTML or JS changes
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
