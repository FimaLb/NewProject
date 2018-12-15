var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');


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

gulp.task('watch', gulp.series('sass','browser-sync'), function(){
	gulp.watch('app/sass/*.sass', gulp.series('sass'));
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});



