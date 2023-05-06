# JavaScript Spread Parameter and Rest Parameter Guide

This guide is intended to help you understand and work with Spread Parameter and Rest Parameter in JavaScript.

## Spread Parameter

Spread Parameter is used to pass an array as a list of arguments to a function. For example, if you have an array of numbers, you can use the spread operator (`...`) to pass each number as a separate argument to a function.

The syntax for Spread Parameter is:

```javascript
functionName(...parameterName)
```

Here's an example of using Spread Parameter:

```javascript
function myFunction(x, y, z) {
    console.log(x, y, z);
}
const myArray = [1, 2, 3];
myFunction(...myArray);
```

When a function is called with Spread Parameter, the spread parameter is expanded into a list of arguments.

Here's another example of Spread Parameter:

```javascript
arr1 = [1, 2, 3];
console.log(10, 20, ...arr1)
```

## Rest Parameter

Rest Parameter is used to pass an array as a list of arguments to a function. This can be useful when you want to write a function that can accept any number of arguments.

The syntax for Rest Parameter is:

```javascript
function functionName(...parameterName) {
    // code block
}
```

Here's an example of using Rest Parameter:

```javascript
function add_nums(...array) {
    if (array.length === 0) {
        console.log("No numbers to add");
        return;
    } else if (array.length === 1) {
        console.log("Only one number to add");
        return;
    }

    sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    console.log(sum);
}

add_nums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

## Tips

- Spread Parameter and Rest Parameter both use the same syntax, `...`, but they are used in different contexts.
- Spread Parameter is used in a function call, while Rest Parameter is used in a function parameter.
- Spread Parameter and Rest Parameter are a convenient way to work with arrays in JavaScript.