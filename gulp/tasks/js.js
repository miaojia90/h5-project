import config from '../config';
import gulp from "gulp";
import changed from "gulp-changed";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
// js拷贝
gulp.task('js:copy', () => {
    return gulp.src(['src/js/**/*'])
        .pipe(changed(config.js.dest))
        .pipe(gulp.dest(config.js.dest));
});

// js丑化
gulp.task('js:uglify', () => {
    return gulp.src(['src/js/service/**/*.js'])
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(config.js.service));
});

gulp.task('js', gulp.series('js:copy'));

gulp.task('js:watch', () => {
    gulp.watch(['src/js/**/*'], gulp.series('js:copy','js:uglify'));
});

