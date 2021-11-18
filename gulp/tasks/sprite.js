import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import config from '../config';

const spriteMono = () => (
	gulp.src(`${config.src.iconsMono}/**/*.svg`)
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: '../sprites/sprite-mono.svg',
				},
			},
			shape: {
				transform: [
					{
						svgo: {
							plugins: [
								{
									removeAttrs: {
										attrs: ['class', 'data-name', 'fill.*', 'stroke.*'],
									},
								},
							],
						},
					},
				],
			},
		}))
		.pipe(gulp.dest(config.dest.images))
);



const spriteMulti = () => (
	gulp.src(`${config.src.iconsMulti}/**/*.svg`)
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: '../sprites/sprite-multi.svg',
				},
			},
			shape: {
				transform: [
					{
						svgo: {
							plugins: [
								{
									removeAttrs: {
										attrs: ['class', 'data-name'],
									},
								},
								{
									removeUselessStrokeAndFill: false,
								},
							],
						},
					},
				],
			},
		}))
		.pipe(gulp.dest(config.dest.images))
);
export const spriteBuild = gulp.parallel(spriteMono, spriteMulti);

export const spriteWatch = () => {
	gulp.watch(`${config.src.iconsMono}/**/*.svg`, spriteMono)
	gulp.watch(`${config.src.iconsMulti}/**/*.svg`, spriteMulti)

};
