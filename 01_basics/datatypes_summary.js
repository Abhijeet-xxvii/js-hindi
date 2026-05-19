// primitive data type (call by value)

// 7 types : String, Number, Boolean, Null, Undefined, Symbol(make component unique), BigInt

// const score = 100;
// const scoreValue = 100.3;
// const isLoggedIn = false;
// const temp = null;
// let userEmail = undefined;  or let userEmail;
// const id = Symbol('123');
// const anotherid = Symbol('123');

// console.log(id==anotherid);

// const bigNumber = 5154484532165484531534845;



// reference type (Non-primitive data type)

// Array(type function), Objects(type function), Functions(type object function)

// const hero = ["super","bat","iron","captain"]
// let myObj = {
    // name:"abc",
    // age:12
// }

// const myFunction = function(){
// console.log("hello world");
    
// }

// console.log(typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3

// *****************************************************

// Stack(Primitive)   (get copy as output),
// Heap(Non-primitive)   (get reference as output)

let myName = "abscd"

let anothername = myName
anothername = "chaiaurcode"

console.log(myName);
console.log(anothername);

let user ={
    email:"absc@gmail.com",
    upi:"user@abcd"
}

let user2 = user

user2.email = "user2@gmail.com";

console.log(user.email);
console.log(user2.email);

