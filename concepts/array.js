// Array in JS

// Array can be heterogeneous in JS
// Array can be defined as follows:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

// You can also use the Array constructor to create an array
let arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr2);

// You can also use the Array constructor to create an array with a specific length
let arr3 = new Array(10);
console.log(arr3);

// You can also use the Array constructor to create an array with a specific length and fill it with a value
let arr4 = new Array(10).fill(0);
console.log(arr4);


// To loop through an array using the for in loop
for (let i in arr) {
    console.log(arr[i]);
}
// The way the for in loop works is that it loops through the index of the array
// This method is not recommended as it is not the best way to loop through an array



// To loop through an array using the for of loop
for (let i of arr) {
    console.log(i);
}
// The way the for of loop works is that it loops through the value of the array
// This method is recommended as it is the best way to loop through an array


// Array.from() is a method that creates a new array from an array like object
// Array like object is an object that has a length property and indexed elements

function sum() {
    let args = Array.from(arguments);
    let sum = 0;
    for (let i of args) {
        sum += i;
    }
    return sum;
}
// Sidenote: The arguments object is an array like object that contains the arguments passed to a function
// So, technically you can pass arguments to a function even if it doesn't have any parameters :scream:

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// The Array.from() method converts any array like object to an array


// List of some ES6 array methods (These methods belong to the Array class itself):

// Array.isArray() - Checks if the object is an array
console.log(Array.isArray(arr)); // true

// Array.from() - Creates a new array from an array like object
console.log(Array.from(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Array.of() - Creates a new array from the arguments passed to it
console.log(Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// The rest of the array methods are as follows:
// Array.prototype.concat() - Concatenates two or more arrays
// Array.prototype.copyWithin() - Copies array elements within the array
// Array.prototype.entries() - Returns a new Array Iterator object that contains the key/value pairs for each index in the array
// Array.prototype.every() - Checks if every element in an array pass a test
// Array.prototype.fill() - Fill the elements in an array with a static value
// Array.prototype.filter() - Creates a new array with every element in an array that pass a test
// Array.prototype.find() - Returns the value of the first element in an array that pass a test
// Array.prototype.findIndex() - Returns the index of the first element in an array that pass a test
// Array.prototype.forEach() - Calls a function for each array element
// Array.prototype.includes() - Checks if an array contains the specified element
// Array.prototype.indexOf() - Search the array for an element and returns its position
// Array.prototype.join() - Joins all elements of an array into a string
// Array.prototype.keys() - Returns a new Array Iterator that contains the keys for each index in the array
// Array.prototype.lastIndexOf() - Search the array for an element, starting at the end, and returns its position
// Array.prototype.map() - Creates a new array with the result of calling a function for each array element
// Array.prototype.pop() - Removes the last element of an array, and returns that element
// Array.prototype.push() - Adds new elements to the end of an array, and returns the new length
// Array.prototype.reduce() - Reduce the values of an array to a single value (going left-to-right)
// Array.prototype.reduceRight() - Reduce the values of an array to a single value (going right-to-left)
// Array.prototype.reverse() - Reverses the order of the elements in an array


