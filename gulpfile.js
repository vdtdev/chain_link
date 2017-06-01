// Gulp file for chain_link react app

"use strict";

// use slurp to combine required packages
var slurp = require('slurp-req');
var m = {
    connect: 'gulp-connect',
    // open built files in browser
    open: 'gulp-open',
    // package js, allow node.js files to run in browser
    browserify: 'browserify',
    // text stream
    source: 'vinyl-source-stream',
    // concatenation
    concat: 'gulp-concat',
    // linting
    lint: 'gulp-eslint',
    // ES6/ES2015 support + JSX compiling
    babel: 'babelify'
};

m = slurp(m);

// gulp
var gulp = require('gulp');

// configuration
var config = {
    dev: {
        port: 64412,
        baseUrl: 'http://localhost'
    },
    paths: {
        images: './src/images/**/*.{jpg, png, gif}',
        html: './src/*.html',
        dist: './dist',
        js: [
            './src/**/*.js',
            './node_modules/foundation-sites/dist/js/foundation.min.js'
            // TODO: put UX framework scripts here
        ],
        css: [
            // TODO: Add UX Framework CSS here
            './node_modules/foundation-sites/dist/css/foundation.min.css',
            './src/css/**/*.css'
        ],
        index: './src/index.react.js',
    },
    // packaged bundles
    bundles: {
        js: 'bundle.js',
        css: 'bundle.css'
    }
};

// launch local dev server
gulp.task('server-connect', function(){
    m.connect.server({
        root: ['dist'],
        port: config.dev.port,
        base: config.dev.baseUrl,
        livereload: true
    });
});

// Open home page on server
gulp.task('server-open',['server-connect'], function(){
    gulp.src('dist/index.html')
        .pipe(m.open({uri: [config.dev.baseUrl,":",config.dev.port,"/"].join("")}));
});

// watch for file changes, trigger reload
gulp.task('server-watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.css, ['css', 'js']);
    gulp.watch(config.paths.js, ['js']);
});


// Copy HTML to dist
gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(m.connect.reload()); // reload view
});

// Copy Images to dist
gulp.task('images', function(){
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(m.connect.reload()); // reload
});

// Compile ES6 + JSX, pack with Browserify
gulp.task('js', function(){
    m.browserify(config.paths.index)
        .transform("babelify", {presets: ["es2015","react"]})
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(m.source(config.bundles.js))
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(m.connect.reload()); // reload
});


// Package CSS files
gulp.task('css', function(){
    gulp.src(config.paths.css)
        .pipe(m.concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

// linting
gulp.task('lint', function(){

});


// default task
gulp.task('default', ['html','images','css','js','lint','server-open','server-watch']);
// build-only default
gulp.task('build-only', ['html','images','css','js','lint']);
