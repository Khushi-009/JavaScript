const user = {
    username: "khushi",
    price: 999,

    WelcomeMessgae: function(){
        console.log(`${this.username} , welcome to website`);  // this corrent context ko refer krta h
        // console.log(this);
        
    }
}

// user.WelcomeMessgae()
// user.username = "sam"
// user.WelcomeMessgae()

// console.log(this);


// this sirf objects me hi use ho skta h individual function me nhi


// function chai(){
//     const username = "khushi"
//     console.log(this.username);
    
// }

// chai()


// const chai = function(){
//     const username = "khushi"
//     console.log(this.username);
// }

//  arrow function

const chai = () => {
    const username = "khushi"
    console.log(this.username);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// implicit 
// const addTwo = (num1, num2) => num1+num2

// const addTwo = (num1, num2) => (num1+num2)

const addTwo = (num1, num2) => ({username: "khushi"})  // object return kr rhe h toh paranthesis me hona chayea

console.log(addTwo(3,4))