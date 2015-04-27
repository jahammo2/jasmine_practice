// The namespace for this application
var app = {};

function gamePlay () {
	return 1;
}

// var gulp = require('gulp'),
//     sass = require('gulp-sass'),
//     neat = require('node-neat').includePaths;

// var paths = {
//     scss: './assets/sass/*.scss'
// };

// gulp.task('styles', function () {
//     return gulp.src(paths.scss)
//         .pipe(sass({
//             includePaths: ['styles'].concat(neat)
//         }))
//         .pipe(gulp.dest('./public/css'));
// });

// gulp.task('default',function(){
//     gulp.start('styles');
// });
app.showInitialPage = function () {
  document.body.insertAdjacentHTML(
    'beforeend',
    '<h2>TODO: Remove example.js</h2>' +
    '<p>And change init.js to do whatevz you need</p>');
};

var Person = function() {};

Person.prototype.helloSomeone = function(toGreet) {
    return this.sayHello() + " " + toGreet;
};

Person.prototype.sayHello = function() {
    return "Hello";
};
//# sourceMappingURL=app.js.map