const accountId = 144553
let accountEmail = "khushi@google.com"
var accountPassword = "123456"
accountCity = "jhansi"
let accountState;    // this can be used when the value is not defined or known later

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

// accountId = 2 // not allowed

accountEmail = "abc@gmail.com" // allowed

accountPassword = "852963" // allowed

accountCity = "jaipur"

// console.log(accountCity)

console.table([accountEmail, accountPassword, accountCity, accountId, accountState])