const { doesNotMatch } = require("assert");
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig");

gulp.task("default", function(done) {
    var tsResult = gulp.src("./src/**/*.ts")
    .pipe(tsProject())
    tsResult.js.pipe(gulp.dest("dest"))
    done();
})