var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src('./sass/**/*.scss')
    // Run Sass on those files
    .pipe(sass(sassOptions).on('error', sass.logError))
    //.pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest('./assets/css/'))
    .pipe(livereload());
});

//Watch task

// gulp.task('default',function() {
//     gulp.watch('sass/**/*.scss',['styles']);
// });

gulp.task('watch', function() {
  livereload.listen();
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch('./sass/**/*.scss', ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['sass', 'watch' /*, possible other tasks... */]);
