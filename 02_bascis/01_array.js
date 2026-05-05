//  array 

const myArr = [3,5,9,5,6]
const myheros = ["shakitman", "naagraj"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);

// Array methods

// myArr.push(9)
// myArr.push(88)
// myArr.pop()

// myArr.unshift(55)  // adds the value at starting
// myArr.shift() // removes the first value

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// console.log(myArr);


const newArray = myArr.join()  // this changes the type of array to string (value remains same)

// console.log(myArr);
// console.log(newArray);



//  slice , splice

console.log("A ", myArr);

const myN1 = myArr.slice(1, 3)  // original array remains the same (does not include last index)

console.log(myN1);
console.log("B ", myArr);


// output of splice is numbers ecxuklded in splice (manipulates original array)
const myN2 = myArr.splice(1,3)   // include last index (original array is not same, splice removes the indexes includes)

console.log(myN2);
console.log("B ", myArr);

