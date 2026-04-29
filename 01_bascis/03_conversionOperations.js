// let score = "33abc"  // if the number is string
let score = null

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)  // type conversion

// console.log(typeof valueInNumber)
// console.log(valueInNumber)


// "33" => 33
// "33abc" => NaN
// true = 1; false=0

let aBooleanNumber = "khushi"

let convertedBoolean = Boolean(aBooleanNumber)   // conversion of boolean

// console.log(convertedBoolean)


// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let someString = String(someNumber)

// console.log(someString)
// console.log(typeof someString);



// *****************************************  OPERATIONS  **************************************


let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%2)



let str1 = "hello"
let str2 = " khushi"
let str3 = str1 + str2

// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2) // if string first then everything will be treated as string 

console.log(typeof(1 + 2 + "2")) // if num first everthing will be treated as number then converted to string

// console.log(3 + (4 * (5 % 3)))  // always use bracket while dealing with operations