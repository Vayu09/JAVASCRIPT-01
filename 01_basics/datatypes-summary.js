// primitive

// 7 types : string, Number, boolean , null , undefined , symbol , big int

// javascript id dynamic language

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// for  big int put (n)in last

//const bigNumber = 6367623659236923623692n


// reference (non primitive)

// Array , object , Functions


const heros = ["vayu", "nandan", "typejs"];
let myobj = {
    name: "vayu",
    age: 20,
}

const myFunction = function(){
    console.log("hellow world");
    
}

//console.log(typeof myfunction);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
// Stack (primitive), heap (non-primitive)

let myYoutubename = "vayu"

let anothername = myYoutubename
anothername = "aryan"

console.log(anothername);
console.log(myYoutubename);


let userOne = {
    email: "vayu@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "aryan@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 
 

