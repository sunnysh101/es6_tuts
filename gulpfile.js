const { watch, src, parallel, series, dest, task } = require("gulp");
var gulp = require("gulp");
var babel = require("gulp-babel");

const files = {
  jsPath: "./src/**/*.js",
  jsOutputPath: "./public",
};

// JS task
function jsTask() {
  return src("src/app.js")
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(dest("./public"));
}
// Watch task
function watchTask(){
    watch(files.jsPath, parallel(jsTask))
}

task("js", jsTask);

// Default task
exports.default = series(watchTask)

