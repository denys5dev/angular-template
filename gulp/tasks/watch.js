'use strict';

module.exports = function(){
    $.gulp.task('watch', function() {
		$.gulp.watch('./src/app/**/*.js', $.gulp.series('js.process'));
		$.gulp.watch('./src/**/*.jade', $.gulp.series('jade'));
		$.gulp.watch('./src/assets/styles/**/*.scss', $.gulp.series('sass'));
		$.gulp.watch('./src/assets/img/**/*.*', $.gulp.series('copy.image'));
	});
};