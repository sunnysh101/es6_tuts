// TL;DR: Spread Parameter and Rest Parameter are used to pass an array as a list of arguments to a function..
// ... in a function call is called Spread Parameter and .... in a function parameter is called Rest Parameter

// Spread Parameter

// Spread Parameter is used to pass an array as a list of arguments to a function.
// For example, if you have an array of numbers, you can use the spread operator to pass each number as a separate argument to a function.

// The syntax for spread parameter is:
// functionName(...parameterName)

// Example of spread parameter
function myFunction(x, y, z) {
    console.log(x, y, z);
}
const myArray = [1, 2, 3];
myFunction(...myArray);    // When a function is called with spread parameter, the spread parameter is expanded into a list of arguments

// Another example of spread parameter


arr1 = [1, 2, 3];
console.log(10, 20, ...arr1)


// Rest Parameter

// Rest Parameter is used to pass an array as a list of arguments to a function.
// This can be useful when you want to write a function that can accept any number of arguments.

// The syntax for rest parameter is:
// function functionName(...parameterName) {
//     // code block
// }


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