//  to declare objects there are two methods 1-> Literal   2-> Constructor

//  singleton     (literal se jb define krte h tb singleton nhi bnta h)  (constructore - yes)

// Object.create     // this is a constructore method jisme singleton bnta h

//  object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "khushi",
    "full name": "khushi Arya",
    [mySym]: "mykey1",    // to use symbol here [] is required (iske bina bhi work krega but correct syntax is this)
    age: 22,
    location: "delhi",
    email: "khushi@google.com",
    isLoggedIn: false,
    lastLogginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser["mySym"]);

JsUser.email = "khushi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "khushi@facebook.com"

// console.log(JsUser["email"]);


JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());