const score = 400
console.log(score) ;

// const balance = new Number(100)
// console.log(balance) ;

// console.log(balance.toString());
// console.log(balance.toFixed(1));

const otherNumber = 23.8996

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));


console.log(Math.random());  // math.random always gives the value between 0 and 1 
console.log(Math.random()*10 + 1); // multiplying by 10 so that can get an accurate value 
console.log(Math.floor(Math.random()*10) + 1); // adding 1 coz if random is is 0 then whole will be 0

const min = 10
const max = 20

// now in this used the formula max - min to define the range added one to avoid 0 case and to make sure min is required added the min value
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


