// Primitive data Types

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100 // no need to define type
const scoreValue = 100.3 // only number there is no float n all

const isLoggedIn = false
const OutsideTemp = null  // type is object (output)
let userEmail;

const id = Symbol('123')  // symbol is used to create unique id
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 1478621478652147n   // type is bigint

// Reference (Non Primitive)

// Array, Objects, functions 

const heros = ['shaktiman', 'naagraj', 'doga']

const myObject = {  // type is object
    name: 'Khushi',
    age : 22
}

const myFunction = function(){   // type is function
    // console.log("hello world");
}

// console.log(typeof OutsideTemp)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack  (Primitive) (stack is used with primitive)  , Heap  (Non-primitive)
// stack me same variable ki copy milti hai and heap me ussi variable ka reference 

let myName = "khushiarya"

let anotherName = myName
anotherName = "chaiaurcode"

// console.log(anotherName);
// console.log(myName);


let userOne = {
    email: "user@google.com",
    upi: "user@ypl"
}

let userTwo = userOne

userTwo.email = 'khushi@google.com'

console.log(userOne.email);
console.log(userTwo.email);

