var gulp = require('gulp'),
    gutil = require('gulp-util'),
    bowerFiles = require('gulp-bower-files'),
    clean = require('gulp-clean'),
    coffee = require('gulp-coffee'),
    coffeeLint = require('gulp-coffeelint'),
    concat = require('gulp-concat'),
    es = require('event-stream'),
    File = require('gulp-util').File,
    filter = require('gulp-filter'),
    html2js = require('gulp-ng-html2js'),
    inject = require('gulp-inject'),
    karma = require('karma').server,
    ngmin = require('gulp-ngmin'),
    path = require('path'),
    order = require('gulp-order'),
    Q = require('q'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    sourcemaps = require('gulp-sourcemaps'),
    streamQueue = require('streamqueue'),
    through = require('through'),
    through2 = require('through2'),
    gulpNgConfig = require('gulp-ng-config')
    uglify = require('gulp-uglify');

var config = {
  src: 'assets',
  build: 'public'
};


gulp.task('clean', function() {
  return gulp.src(config.build)
    .pipe(clean())
});


function json2angular(template) {

}
/**
 * Converts JSON dictionaries to Angular.js and includes them in fh.i18n module.
 */

function json2translate(template) {
  var templateStr = null;
  var queue = [];

  var translationTemplate = function(dictFile) {
    var locale = path.basename(dictFile.path, '.json');
    var inputDict = JSON.parse(dictFile.contents)[locale];
    if (!inputDict) {
      console.error('Unexpected translation format. locale=' + locale);
      return null;
    }

    var dict = {};
    inputDict.forEach(function(d) {
      dict[d.key] = d.value;
    });

    dictFile.contents = new Buffer(templateStr
        .replace('{{LOCALE}}', JSON.stringify(locale))
        .replace('{{DICTIONARY}}', JSON.stringify(dict)));
    dictFile.path = dictFile.path.replace(/\.json$/, '.js');
    return dictFile;
  };

  var outputStream = through2.obj(function(dictFile, enc, callback) {
    if (templateStr) {
      outputStream.push(translationTemplate(dictFile));
      callback();
    }
    else {
      queue.push({dictFile: dictFile, callback: callback});
    }
  });

  template.pipe(through2.obj(function(templateFile, enc, callback) {
    if (templateStr) {
      throw new Error("Only expected one json2translate template file.");
    }

    templateStr = templateFile.contents.toString();

    while (queue.length > 0) {
      var queued = queue.shift();
      outputStream.push(translationTemplate(queued.dictFile));
      queued.callback();
    }

    callback();
  }));

  return outputStream;
}

gulp.task('build-vendor-dev', ['clean'], function() {
  return bowerFiles({env: "development", bowerDirectory: "./bower_components"})
    .pipe(gulp.dest(config.build + '/bower_components'))
});

gulp.task('build-coffee', ['clean', 'build-vendor-dev'], function() {
  return gulp.src(config.src + '/**/*.coffee')
    .pipe(coffeeLint())
    .pipe(coffeeLint.reporter())
    .pipe(coffeeLint.reporter('fail'))
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest(config.build + '/assets'));
});

gulp.task('build-i18n', ['clean'], function() {
  return gulp.src(config.src + '/support/i18n/**/*.json')
    .pipe(json2translate(
      gulp.src(config.src + '/support/i18n/i18n.tpl')
    ))
    .pipe(gulp.dest(config.build + '/assets/i18n'));
});

gulp.task('build-countries', ['clean'], function() {
  return gulp.src(config.src + '/utility/countries.json')
    .pipe(gulpNgConfig('fh.countries'))
    .pipe(gulp.dest(config.build + '/utility'));
});

gulp.task('build-roles', ['clean'], function() {
  return gulp.src(config.src + '/utility/roles.json')
    .pipe(gulpNgConfig('fh.roles'))
    .pipe(gulp.dest(config.build + '/utility'));
});

gulp.task('build-templates', ['clean'], function() {
  return gulp.src([
      config.src + '/**/*.tpl.html',
      '!' + config.src + '/index.tpl.html'
    ])
    .pipe(html2js({
      moduleName: 'fh.templates',
      prefix: ''
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(config.build));
});

gulp.task('build-html-dev', [
  'clean',
  'build-vendor-dev',
  'build-i18n',
  'build-coffee',
  'build-templates',
  'build-countries',
  'build-roles'
], function() {
  var sourceStream = streamQueue(
    {objectMode: true},
    gulp.src([
      config.build + "/bower_components/angular/angular.js",
      config.build + "/bower_components/**/*.js",
      config.build + "/bower_components/**/*.css",
      config.build + "/assets/**/*module.js",
      config.build + "/assets/**/*resource.js",
      config.build + "/assets/**/*.js",
      config.build + "/utility/**/*.js",
      config.build + "/*.js",
      config.build + "/assets/**/*.css"
      ])
    );

  return gulp.src(config.src + '/index.tpl.html')
    .pipe(inject(sourceStream, {
      addRootSlash: false,
      ignorePath: '/public/'
    }))
    .pipe(rename('index.tmpl'))
    .pipe(gulp.dest('templates'));
});

gulp.task('build-dev', [
  'build-html-dev'
], function() {
});

gulp.task('default', function(){
  return gutil.log("gulp is running")
})

