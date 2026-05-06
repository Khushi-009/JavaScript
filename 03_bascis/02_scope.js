//var c = 300
let a = 300
if(true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a)
}

// for (let i = 0; i < array. length; i++) {
//     const element = array[i];
// }


// console.log(a);
// console.log(b);
// console.log(c);



//  Nested scope 

function one(){
    const username = "khushi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console. log (username + website);
    }

    // console. log(website);

}




//  +++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5))

function addOne(num){
    return num + 1
}


const addTwo = function(num){  // isme hmne const declare kra hai issliye addTwo ko phle access nhi ke skte
    return num + 2
}

addTwo(5)
