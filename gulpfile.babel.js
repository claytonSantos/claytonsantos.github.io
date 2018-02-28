	require('babel-register');
	import gulp from 'gulp';
	import rename from 'gulp-rename';
	import uglify from 'gulp-uglify';
	import plumber from 'gulp-plumber';
	import concat from 'gulp-concat';
	import minify from 'gulp-clean-css';
	import autoprefixer from 'gulp-autoprefixer';
	import sourcemaps from 'gulp-sourcemaps';
	import sass from 'gulp-sass';
	import babel from 'gulp-babel';
	import cleanCSS from 'gulp-clean-css';
	import eslint from 'gulp-eslint';
	import sassLint from 'gulp-sass-lint';
	import notify from 'gulp-notify';
	var browserSync = require("browser-sync").create();

// ================================
// config of src and destination sources
// ================================
var config = {
	aplication: {
		name: 'meusite',
		port: 3000,
		phpPort: 8888,
		localhost: 'localhost'
	},
	scripts: {
		src: 'src/js/*.js',
		dest: 'public/js/',
		watch: 'src/js/*.js',
		min: 'public/js/*.js'
	},
	styles: {
		src: 'src/sass/index.scss',
		dest: 'public/css/',
		min: 'public/css/*.css',
		watch: 'src/sass/**/*.s+(a|c)ss'
	},
	page: 'index.html'
};

// ================================
// task scripts
// ================================
function scripts () {
	return gulp.src(config.scripts.src)
	.pipe(plumber({
		errorHandler: function(error){
			notify.onError("Error: <%= error.message %>")
		}
	}))
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failAfterError())
	.on("error", notify.onError({
		onLast: true,
		title: "TASK: Your js 👎",
		message: "<%= error.message %>"
	}))
	.pipe(babel())
	.pipe(uglify())
	.pipe(rename({ extname: '.min.js' }))
	.pipe(gulp.dest(config.scripts.dest))
}

// ================================
// validate your code sass
// ================================

function lintSass(){
	return gulp.src(config.styles.watch)
	.pipe(sassLint({
		configFile: '.sasslintrc'
	}))
	.pipe(sassLint.format())
	.pipe(sassLint.failOnError())
	.on("error", notify.onError({
		onLast: true,
		title: "TASK: Your css 👎",
		message: "<%= error.message %>"
	}))
}

// ================================
//  task reload
// ================================
const reload = (done) => {
	browserSync.reload();
	done();
}

// ================================
// task styles
// ================================
const styles = () => {
	return gulp.src(config.styles.src)
		.pipe(plumber({
			errorHandler: function(error){
				console.log(error)
			}
		}))
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))		
		.pipe(rename({ extname: '.min.css' }))
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest(config.styles.dest))
}

// ================================
// task server
// ================================
const serve = (done) => {
	browserSync.init(
		{
			files: [config.scripts.min, config.styles.min, config.page],
			host:config.aplication.localhost,
			proxy: config.aplication.localhost + ':' + config.aplication.phpPort + '/' + config.aplication.name,
			port: config.aplication.port,
			open: false
		}
	);
	done();
}

// ================================
// task watch change files
// ================================
const watch = (done) => {
	gulp.watch(config.scripts.watch, gulp.series(scripts, reload));
	gulp.watch(config.styles.watch, gulp.series(lintSass,styles, reload));
	done();
}

// ================================
// task default
// ================================

gulp.task('default', gulp.series(serve, gulp.parallel(styles, scripts, watch)), (done) => {
	done();
});
