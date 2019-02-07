// Requires Gulp v4.
// $ npm uninstall --global gulp gulp-cli
// $ rm /usr/local/share/man/man1/gulp.1
// $ npm install --global gulp-cli
// $ npm install
const { src, dest, watch, series, parallel } = require('gulp');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const sasslint = require('gulp-sass-lint');
const cache = require('gulp-cached');

// Compile CSS from Sass.
function buildStyles() {
  return src('scss/styles.scss') // The source file with all the @import components in it.
    .pipe(plumber()) // Global error listener.
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
    .pipe(sourcemaps.write())
    .pipe(dest('css/'))
    .pipe(browsersync.reload({ stream: true }));
}

// Watch changes on all *.scss files and trigger buildStyles() at the end.
function watchFiles() {
  watch(
    ['scss/*.scss', 'scss/**/*.scss'],
    { events: 'all', ignoreInitial: false },
    series(buildStyles)
  );
  watch(
    ["*.html"],
    { events: 'change'},
    browsersync.reload({ stream: true })
  );
}

// Init BrowserSync.
function browserSync(done) {
  browsersync.init({
    // proxy: '127.0.0.1:3000', // Change this value to match your local URL.
    // socket: {
    //   domain: 'localhost:3000'
    // }
    server: {
        baseDir: "./"
    },
    port: 3000
  });
  done();
}

// Init Sass linter.
function sassLint() {
  return src(['scss/*.scss', 'scss/**/*.scss'])
    .pipe(cache('sasslint'))
    .pipe(sasslint({
      configFile: '.sass-lint.yml'
    }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
}

// Export commands.
exports.default = parallel(browserSync, sassLint, watchFiles); // $ gulp
exports.sass = buildStyles; // $ gulp sass
exports.watch = watchFiles; // $ gulp watch
exports.build = series(buildStyles); // $ gulp build