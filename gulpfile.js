var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs');


gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream:true}))
});

//Reload browser
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', function(){
	gulp.watch('app/sass/*.sass', gulp.series('sass'));
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch','sass','browser-sync'));

