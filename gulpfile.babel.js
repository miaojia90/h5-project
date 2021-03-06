import config from './gulp/config.js';
import gulp from 'gulp';
import requireDir from 'require-dir';
import browserSync from 'browser-sync';
import yargs from 'yargs';
const argv = yargs.argv;
const reload = browserSync.reload;

requireDir('./gulp/tasks', { recurse: true });

/* https://github.com/gulpjs/gulp/blob/4.0/docs/API.md*/
gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './'
        },
        open: false,
        directory: true
    });

    gulp.watch(config.html.src).on('change', reload);
    gulp.watch(config.scss.src, gulp.series('css:sass'));
    gulp.watch(config.img.src, gulp.series('img'));
    gulp.watch(config.js.src, gulp.series('js:copy','js:uglify'));
});
//生产开发环境配置
const pro=gulp.series('clean', 'css:sass', 'img', 'js:uglify', 'serve');
const dev=gulp.series('clean', 'css:sass', 'img', 'js:copy', 'serve');
//任务区分
const task= !!argv.pro?pro:dev;
export default task;
