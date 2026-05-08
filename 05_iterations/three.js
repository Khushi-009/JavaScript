// for of loop

const Arr = [1,2,3,4,5,6]
for (const element of Arr) {
    // console.log(element);
    
}

const greetings = "hello world"

for (const greet of greetings) {
    // console.log(greet);
    
}

const map = new Map()   // initializing map  --> unique value (donot store diplicate) and stores in exact order as given
map.set('IN',"INDIA")
map.set('USA',"United states of America")
map.set('Fr',"france")
map.set('IN',"INDIA")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
    
}

// object me for of se iteration nhi ho skta
const myObject = {
    'game1': "NFs",
    'game2': "spiderman"
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value);
    
}