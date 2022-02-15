const fs = require('fs')

module.exports = function () {

	$.gulp.task('pug', function () {

		return $.gulp.src($.sourse + '/pug/pages/*.pug')
				.pipe($.data(function(file) {
					return JSON.parse(fs.readFileSync($.sourse + '/pug/content.json'))
			}))
			.pipe($.pug({ 
					pretty: true,
					cache: true, 
					// locals: dataFromFile || {}
			}).on("error", $.notify.onError()))
			.pipe($.tabify(2, true))
			.pipe($.gulp.dest($.public))
			.on('end', $.browserSync.reload);
	});
}