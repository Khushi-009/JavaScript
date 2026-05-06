//  Function

function sayMyName(){
    console.log("K");
    console.log("H");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
}

// sayMyName()

//  function to add two numbers

// function addTwoNum(a,b){
//     console.log(a+b);
    
// }

function addTwoNum(a,b){
    return a+b
}

const result = addTwoNum(4,5)

// console.log(result);


function loginuserMessage(username){
    if(!username){    // this if is equivalent to if(username === undefined)
        console.log("please enter a username");
        return
    }
    return `${username} just logged In`
}

// console.log(loginuserMessage("khushi"))
// console.log(loginuserMessage())


function calculateCartprice(...num){
    return num
}

// console.log((calculateCartprice(200, 400, 500)));


const user = {
    username: "khushi",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "khushi",
    price: 199
})



const myNewArray = [100, 200, 300, 400]

function getSecondValue(getValue){
    console.log(getValue[1]);
}

getSecondValue(myNewArray)