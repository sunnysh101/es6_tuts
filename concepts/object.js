// Object on Javascript is what dictionary is on Python
// Object can be defined as follows:
let person = {
    "name": "Billy Bob",
    "age": 20
}

// Similarly, objects can also hold functions in ES6, for example
let person2 = {
    "name": "Billy Bob",
    "age": 20,
    "ageAfter1year": function ageAfter1Year() {
        this.age += 1
    }
}

person2.ageAfter1year()
person2.ageAfter1year()
person2.ageAfter1year()
console.log(person2["age"])

// You can write the above function using anonymous function in a similar way
let person3 = {
    "name": "Billy Bob",
    "age": 20,
    "ageAfter1year": function() {
        this.age += 1
    }
}

person3.ageAfter1year()
person3.ageAfter1year()
console.log(person3.age)

// One last method of using the function is as follows:
let person4 = {
    "name": "Billy Bob",
    "age": 20,
    ageAfter1year() {
        this.age += 1
    }
}

person4.ageAfter1year()
person4.ageAfter1year()
person4.ageAfter1year()
person4.ageAfter1year()
person4.ageAfter1year()
console.log(person4.age)


// You can also use the object to store functions
let person5 = {
    "name": "Billy Bob",
    "age": 20,
    "ageAfter1year": function ageAfter1Year() {
        this.age += 1
    }
}
