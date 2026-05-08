//  for in loop bascially vaha use hota h jaha key values hoti h (values print ke liye specifically mention krna pdta h)
// for of loop directly values print kr deta h



const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"

}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const Arr = [8,5,2,4,5,6]

for (const elements in Arr) {
    console.log(Arr[elements]);   //normally yeh key hi uthata h values ke liye aise krna pdega
    
}