'use strict';

module.exports = function() {
	$.gulp.task('concat_libs', function() {
		return $.gulp.src($.path.vendorLibs)
		.pipe($.gp.concat('libs.js'))
		.pipe($.gp.uglify())
		.pipe($.gulp.dest($.config.root + '/assets/js'))
	})
};