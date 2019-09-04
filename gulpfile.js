// @ts-check

/* 
  After building, type gulp to compress the app.css file and inject it into the html files
  gulp --o ./_build/
  --o default = ./_build/
*/

let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let replace = require('gulp-replace');
let htmlmin = require('gulp-htmlmin');
let fs = require('fs');
let argv = require('minimist')(process.argv.slice(2));

let buildFolder = './_site/';
let cssFolder = './_site/assets/css/';

gulp.task('handle-args', function(done){
  if(argv.o !== undefined){ //o argument for output
      buildFolder = argv.o;
      cssFolder = argv.o + "assets/css/";
  }
  done();
});

gulp.task('minify-css', function(){
  return gulp.src(cssFolder + "*.css")
    .pipe(cleanCSS({level: 2, compatibility: 'ie9'}))
    .pipe(gulp.dest(cssFolder));
});

gulp.task('inject-content', function(){
  //Finds every html file
  return gulp.src(buildFolder + '**/*.html')
  //Inject the css
  .pipe(replace(/<link[^>]+?href="\/assets\/css\/((?:app|fonts)\.css)"[^>]*>/g, (m, fileName) => {
    let style = fs.readFileSync(cssFolder + fileName, 'utf8');
    return "<style>" + style + "</style>";
  }))
  .pipe(gulp.dest(buildFolder));
});

gulp.task('minify-html', function(){
  //Finds every html file
  return gulp.src(buildFolder + '**/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest(buildFolder));
});

gulp.task('default', gulp.series('handle-args', 'minify-css', 'inject-content', 'minify-html'));