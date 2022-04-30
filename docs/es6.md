# Ecmascript (ES6)

# Why ES6?

ES6 is a newer standard of Javascript which overcomes many of the issues with ES5 and introduces new features such as:

- newer datatypes
- new ways of defining variables (var & const)
- higher performance
- new loops
- template literals
- spread operators
- and much more...

# The browser problem

Browsers like chrome and firefox push newer updates every now and then but the world of browser is more than just these two. There are countless browsers and browsers like Internet Explorer have minimum to no support for ES6. 

## Transpilers

> *Trans* as in transfer and *piler* as in compiler
> 

Transpiler are softwares or tools that helps to convert code in one language to another language. In case of ES6, transpiler converts the code into ES5. 

## Examples

In the example below, the code uses the spread operator which expands out the number array into `Math.max` .

```jsx
const numbers = [1,2,3,4,5];
const max = Math.max(...numbers);
```

This code is transpiler into the following code:

```jsx
"use strict";

var numbers = [1, 2, 3, 4, 5];
var max = Math.max.apply(Math, numbers);
```

Javascript can be compiled using various languages. Languages like Coffeescript has existed for more than a decade and it can be used to compile code into Javascript. Similarly, tools like Babel has been used to convert es6 scripts to es5.

# Babel

Babel is the de-facto transpiler for ES6. As of Babel 6, Babel has become more pluggable and default action to convert code from ES6 to ES5 has been removed. So, in order to get the transpiler, the babel-preset-es2015 must be available.

## Prerequisites

- Node.js
- working knowledge of terminal
- babel cli

## Getting started with Babel

```bash
npm init
npm install --save-dev babel-cli
```

The —save-dev flag saves the code as devDependencies. 

```bash
# To install just the production dependency
npm install --production
```

## Babel Preset

Since the preset is not included from earlier, the preset will be required to be installed separately

i.e. 

```bash
npm install --save-dev babel-preset-es2015
```

This will install the babel preset form es2015

## Running Babel

Babel can be run by making changes in the `package.json` . It contains a section called `scripts` and can be used to write a terminal command to output data as following:

```json
"scripts": {
  "js" : "babel src/app.js --out-file public/app.js"
}
```

The above script takes the section of the code from `src/app.js` and transpiles it and saves the output at `public/app.js`. 

To run the output, type `npm run js` on the terminal. This will output the file to `public` folder

However, the code isn’t converted from ES6 to ES5 for which we need to configure a `.babelrc` file.

## Babelrc

Babelrc or `.babelrc` to be exact is a config file for babel. The file lies on the `root` of the folder. The following code enables the preset on babel:

```json
{
  "presets": ["@babel/preset-env"]
}
```

## Running babel to listen to any changes

```json
"scripts": {
  "js" : "babel src/app.js --watch --out-file public/app.js"
}
```

The `—watch` flag listens to any changes and then transpiles the code once the code is saved.

We can combine babel with task runner like Gulp in order to automate the whole process rather than typing `npm run js` everytime.

# Gulp

Gulp is a popular task runner that helps to automate the workflow. Other workflow tools include grunt, broccoli, brunch. There’s an excellent video by Coder Coder on youtube explaining the concept of Gulp.

[Gulp 4 Crash Course for Beginners](https://www.youtube.com/watch?v=-lG0kDeuSJk)

## Configuring Gulp

Start by installing gulp-cli globally and then gulp locally in the project.

```bash
npm install --global gulp-cli
npm install --save-dev gulp
```

Now the gulpfile.js will also be needed to be configured.

### gulpfile.js

Create a new file called gulpfile.js which is used to define our tasks. Use the require function to call gulp. Require is used to import any modules from the node_modules folder.

Add the following code to gulpfile.js

```jsx
const { watch, src, parallel, series, dest } = require("gulp");
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

gulp.task("js", jsTask)

// Default task
gulp.task('default', () => {
});
```

> For Babel 7, use these steps:
> 

[Babel · The compiler for next generation JavaScript](https://babeljs.io/setup#installation)

## Add a watch task on default

Although, gulp can be used to automate the task by typing on the terminal but the real power of gulp can be seen by creating a watch task on gulp. 

This requires only one time to run gulp and then a listener/watcher looks for any changes and automatically runs the required code.

```jsx
const { watch, src, parallel, series, dest } = require("gulp");
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

// Default task
exports.default = series(watchTask)
```

> The output can be optimized based upon the file types, the destination. and so on.
> 

# Important links:

- [https://kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)
- [https://babeljs.io/](https://babeljs.io/)
- [https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js](https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js)
- [http://coffeescript.org/](http://coffeescript.org/)
- [http://commandlinepoweruser.com/](http://commandlinepoweruser.com/)

const gulp = require('gulp');

const babel = require('gulp-babel');

gulp.task('js', () => {

return gulp.src('./src/app.js')

.pipe(babel({

presets: ['es2015']

}))

.pipe(gulp.dest('./public'));

});

gulp.task('default', () => {

});