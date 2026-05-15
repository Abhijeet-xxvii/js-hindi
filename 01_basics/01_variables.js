const accountId = 14453
let accountEmail = "abhi123@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 not allowed


accountEmail = "abs123@v.com"
accountPassword = "7723534765"
accountCity = "gorakhpur"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope

*/


console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
