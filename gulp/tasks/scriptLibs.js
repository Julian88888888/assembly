import gulp from 'gulp';
import concat from 'gulp-concat';
import config from '../config';

export const libsBuild = () => (
	gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/slick-carousel/slick/slick.js'
	])
		.pipe(concat('libs.js'))
		.pipe(gulp.dest(config.dest.js))
);
