//  objects singleton or constructor

// const tinderUser = new Object()   // singleton
const tinderUser = {}   // non singleton

tinderUser.id = "123abc"
tinderUser.name = "khushi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "abc@google.com",
    fullname: {
        userfullname: {
            firstname: "khushi",
            lastname: "arya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// orrrrrrrrrrrr           ({} -> target and other are source, saare source target me ja rhe)
// const obj3 = Object.assign({}, obj1, obj2, obj4)


const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);



console.log(tinderUser);

console.log(Object.keys(tinderUser));  // gives keys in array format which can be used in many ways
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));   // to check whether it has that property or not
