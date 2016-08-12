'use strict';

global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config.js'),
    path: {
        task: require('./gulp/path/tasks.js'),
        template: require('./gulp/path/template.js'),
		vendorLibs: require('./gulp/path/vendor_libs_paths.js'),
        vendorCss: require('./gulp/path/vendor_css_paths.js'),
        app: require('./gulp/path/app.js')
    },
    gulp: require('gulp'),
    rimraf: require('rimraf'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    history: require('connect-history-api-fallback')
};

$.path.task.forEach(function(taskPath) {
	require(taskPath)();
});

// $.gulp.task('default', $.gulp.series('clean', 'jade', 'sass', 'vendor_css', 'concat_libs', 'js.process', $.gulp.parallel('watch', 'serve')));

$.gulp.task('default', $.gulp.series('clean', 'vendor_css',  
$.gulp.parallel(
    'jade', 'sass', 'concat_libs', 'js.process', 'copy.image',
    $.gulp.parallel(
        'watch', 'serve'))));