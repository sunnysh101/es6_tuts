# Let and Const

This guide is intended to help you understand and work with `let` and `const` variables in JavaScript. These variables are block-scoped, unlike `var`, which is function-scoped.

## Let

`let` variables can be declared and updated in a block. You can update the value of a `let` variable.

```javascript
let _name = 'Jim';
console.log(_name);

// You can update the value of a let variable
_name = 'Bob';
console.log(_name);
```

Although you can reassign, you can't redeclare a `let` variable.

```javascript
// This will throw an error
let _name = 'Sally';
```

## Const

`const` variables are constant variables. You can't reassign or redeclare a `const` variable.

```javascript
const _name2 = 'Jim';
console.log(_name2);

// This will throw an error
// _name2 = 'Bob';
```

However, if the `const` variable is an object, you can still update the object.

```javascript
const person = {
    name: 'Test User'
};

person.name = 'Test User 2';
console.log(person.name);
```

## Avoid Using Var

Lastly, avoid using `var`. It is function-scoped and can cause a lot of issues.

```javascript
var _name3 = 'Jim';
console.log(_name3);
```

Use `let` and `const` variables instead.