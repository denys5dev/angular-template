'use strict';

module.exports = function() {
	$.gulp.task('serve', function() {
		$.browserSync.init({
			open: true,
			server: $.config.root,
			 middleware: [ $.history() ]
		});

		$.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
	});
};