import config from '../config';
import gulp from 'gulp';
import sass from 'gulp-sass';
import gulpPostCss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import changed from 'gulp-changed';
import filter from 'gulp-filter';
import browsersync from 'browser-sync';
import gulpif from 'gulp-if';
import fs from 'fs';
import postcss from 'postcss';
import sprites from 'postcss-sprites';

const reload = browsersync.reload;

// TODO: partials无法更新

gulp.task('css:sass', () => {
    return gulp.src(config.scss.src)
        .pipe(changed(config.scss.dest, {extension: '.css'}))
        .pipe(gulpif(config.is.dev, sourcemaps.init()))
        .pipe(sass({
            outputStyle: "expanded"
        }).on('error', sass.logError))
        .pipe(gulpPostCss([
                autoprefixer({
                    browsers: ["last 4 versions"],
                    cascade: false
                })
            ])
        )
        .pipe(gulpif(config.is.dev, sourcemaps.write('.')))
        .pipe(gulp.dest(config.scss.dest))
        .pipe(filter('**/*.css')) // 确保browser-sync只会响应*css文件而非*.css.map文件
        .pipe(reload({
            stream: true  // 浏览器css自动注入(browsersync)
        }));
});

gulp.task('css:watch', () => {
    gulp.watch(config.scss.src, gulp.series('css'));
});
