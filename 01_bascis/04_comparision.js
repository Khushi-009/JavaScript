// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)


// console.log(null > 0)
// console.log(null >= 0)
// console.log(null == 0)

/* The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0.
That's why (2) null >= 0 is true and (1) null > 0 is false.*/


// console.log(undefined > 0)
// console.log(undefined >= 0)
// console.log(undefined == 0)


// "==="  => strict check --> this checks the numner as well as the data type of that

console.log("2" === 2);   // => true
console.log("2" === 2);   // => false
