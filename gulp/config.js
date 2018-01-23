import path from 'path';
import yargs from 'yargs';

const root = path.dirname(__dirname);
const argv = yargs.argv;
const src = `${root}/src`;
const dest = `${root}/dist`;
const pro =`${root}/pro`;
//参数配置
let paths=!!argv.pro?pro:dest;
module.exports = {
    is: {
        dev: argv.dev,
        pro: argv.pro
    },
    src: src,
    dest: dest,
    html: {
        cwd: './html',
        src: './html/**/*.html'
    },
    scss: {
        cwd: src + '/sass',
        src: src + '/sass/**/*.scss',
        dest: paths + '/css'
    },
    img: {
        cwd: src + '/img',
        src: src + '/img/**/*.{jpg,jpeg,gif,png}',
        dest: paths + '/img'
    },
    js: {
        cwd: src + '/js',
        src: src + '/js/**',
        service:paths+'/js/service',
        dest: paths + '/js'
    }
};