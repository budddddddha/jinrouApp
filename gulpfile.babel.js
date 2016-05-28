import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import react from 'gulp-react'
import babel from 'gulp-babel'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import uglify from 'gulp-uglify'
import rename from "gulp-rename"
import watch from 'gulp-watch'
// import browserSync from 'browser-sync'

// const reload = browserSync.reload
const $ = gulpLoadPlugins()

// ---------- File Path ----------
// Base Path
const appDir = "./"
const srcDir = appDir + "src/"
const destDir = appDir + "dist/"

// Src Path
const srcPublicDir = srcDir + "public/"
  const srcScriptsDir = srcPublicDir + "scripts/"
  const srcStylesheetsDir = srcPublicDir + "stylesheets/"
    // Scripts
    const jsxDir = srcScriptsDir + "jsx/"
    const es6Dir = srcScriptsDir + "es6/"
    // Stylesheets
    const sassDir = srcStylesheetsDir + "sass/"
    const cssDir = srcStylesheetsDir + "css/"

// Dest Path
const destPublicDir = destDir + "public/"
  // Scripts
  const destScriptsDir = destPublicDir + "scripts/"
  // Stylesheets
  const destStylesheetsDir = destPublicDir + "stylesheets/"


// ---------- Gulp Code ----------
  // Scripts
  // jsx -> es6
  gulp.task('jsx_es6', () =>
    gulp.src(jsxDir + '**/*.jsx')
          .pipe(react({harmony: false, es6module: true}))
          .pipe(gulp.dest(es6Dir))
  )

  // es6 -> es5
  gulp.task('es6_es5', () =>
    gulp.src([es6Dir + "**/*.js", "!" + es6Dir + "server.js"])
      .pipe($.babel({compact: false}))
      .pipe(gulp.dest(destScriptsDir))
  )

  // *.js -> bundle.js
  gulp.task('_bundle.js', () =>
    browserify(destScriptsDir + 'root.js', { debug: true })
      .transform(babelify, {
        compact: false
      })
      .bundle()
      .on("error", (err) => console.log("Error : " + err.message))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(destScriptsDir))
  )

  // bundle.js -> bundle.min.js
  gulp.task('_bundle.min.js', () =>
    gulp.src(destScriptsDir + 'bundle.js')
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(destScriptsDir))
  )

  // server.es6 -> server.js
  gulp.task('server', () =>
    gulp.src(appDir + "server.es6")
      .pipe($.babel({compact: false}))
      .pipe(gulp.dest(appDir))
  )

gulp.task('watch', [], () => {
  watch([jsxDir + "**/*.jsx"], () => gulp.start('jsx_es6'))
  watch([appDir + "server.js"], () => gulp.start('server'))
  watch([es6Dir + "**/*.js", "!" + es6Dir + "server.js"], () => gulp.start(['es6_es5','_bundle.js']))
  watch([destScriptsDir + 'root.js'], () => gulp.start('_bundle.js'))
  watch([destScriptsDir + 'bundle.js'], () => gulp.start('_bundle.min.js'))
})

// gulp.task('browser', ['watch'], () =>
//   browserSync({
//     server: {
//       baseDir: '/',
//       proxy: '192.168.0.6',
//     },
//     port: 3333
//   })
// )

gulp.task('default', ['watch'])
