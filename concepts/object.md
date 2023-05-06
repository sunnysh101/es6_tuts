# JavaScript Object Basics

This guide is intended to help you understand the basics of using objects in JavaScript.

## Defining Objects

Objects in JavaScript are similar to dictionaries in Python. You can define an object using curly braces `{}` and defining its properties and values using key-value pairs.

Here's an example of defining an object:

```javascript
let person = {
    "name": "Billy Bob",
    "age": 20
}
```

## Working with Functions in Objects

In ES6, you can define functions within an object as one of its properties. You can also use the `this` keyword to refer to the object within the function.

Here are some examples of working with functions in objects:

```javascript
let person2 = {
    "name": "Billy Bob",
    "age": 20,
    "ageAfter1year": function ageAfter1Year() {
        this.age += 1
    }
}

person2.ageAfter1year()
console.log(person2["age"])
```

You can also use anonymous functions to define the function within the object, like this:

```javascript
let person3 = {
    "name": "Billy Bob",
    "age": 20,
    "ageAfter1year": function() {
        this.age += 1
    }
}

person3.ageAfter1year()
console.log(person3.age)
```

Alternatively, you can use a shorter syntax to define the function within the object:

```javascript
let person4 = {
    "name": "Billy Bob",
    "age": 20,
    ageAfter1year() {
        this.age += 1
    }
}

person4.ageAfter1year()
console.log(person4.age)
```

## Storing Functions in Objects

You can also store functions in objects, like this:

```javascript
let person5 = {
    "name": "Billy Bob",
    "age": 20,
    "ageAfter1year": function ageAfter1Year() {
        this.age += 1
    }
}
```

## Tips

- Objects in JavaScript are similar to dictionaries in Python.
- You can define functions within an object in ES6 and use the `this` keyword to refer to the object within the function.
- There are several ways to define functions within an object, including using anonymous functions and a shorter syntax.