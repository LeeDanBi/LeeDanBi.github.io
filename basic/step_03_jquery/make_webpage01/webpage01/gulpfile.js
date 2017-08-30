var gulp = require('gulp'); //경로가 없다면 무조건 node_modules로 간다.
var sass = require('gulp-sass');
var sync = require('browser-sync').create();

var url = {before: './', after:'./'}
var path = {
  sass:{
    src: url.before +'scss/**/*.scss',
    dist: url.after+ 'css/src/'
  },
  html: url.after + '**/*.html'
};

// html ---------------------------

gulp.task('html',function(){
  return gulp.src(path.html)
             .pipe(sync.stream());
});

gulp.task('sass', function () { //'sass'==sass라고 보면 됨 (하지만 이름은 별개)
  return gulp.src(path.sass.src)
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest(path.sass.dist))
             .pipe(sync.stream());
}); //sass 실행

// 서버 생성(browser-sync) ---------------------

gulp.task('sync', ['html', 'sass'] ,function(){
  return sync.init({
    port : 8234, //8000대 이후가 좋음
    server: { baseDir : url.after }
  });
});

// $gulp sync

//실시간 감지 -----------------------------
gulp.task('watch', function () {
  gulp.watch(path.sass.src, ['sass']);
  gulp.watch(path.html, ['html']);

  return;
});

// gulp명령어를 입력하면 바로 수행하는 기능 
gulp.task('default',['watch', 'sync']);