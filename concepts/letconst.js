// Basics on Let and Const

// Let and const are block scoped unlike var which is function scoped.
// Difference between block scoped and function scoped is that block scoped
// is only available within the block it is defined in. Function scoped is
// available within the function it is defined in.



// Let
let _name = 'Jim';
console.log(_name);

// You can update the value of a let variable
_name = 'Bob';
console.log(_name);

// Although, you can reassign, You can't redeclare a let variable

//Uncomment the block below to see the error
// let _name = 'Sally'; // This will throw an error


// Const
// Const is a constant variable. You can't reassign or redeclare a const variable
const _name2 = 'Jim';
console.log(_name2);

// Uncomment the block below to see the error
// _name2 = 'Bob'; // This will throw an error


// However, if the const variable is an object, you can still update the object
const person = {
    name: 'Test User'
};

person.name = 'Test User 2';
console.log(person.name);

// Lastly, DO NOT USE VAR. It is function scoped and can cause a lot of issues.