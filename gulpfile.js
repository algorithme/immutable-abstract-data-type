'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    Config= require('./gulpfile.config');

var config = new Config();


/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,  //path to typescript files
        config.libraryTypeScriptDefinitions,    //reference to library .d.ts files
        config.appTypeScriptReferences];        //reference to app.d.ts files

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc({
            target: 'ES5',
            declarationFiles: false,
            noExternalResolve: true
        }));

    tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});