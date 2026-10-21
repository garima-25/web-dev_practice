//Hoisting
//Hoisting is JavaScript's default behavior of moving declarations to the top of their current scope before any code actually runs

//function hosting - Traditional function declarations are fully hoisted. This means you can safely call a function before you even write its definition in your code
greet(); // Output: "Hello there!" (Works perfectly!)
function greet() {
  console.log("Hello there!");
}

//var Hoisting - Variables created with var are hoisted, but only their name is moved, not their value. (it goes to global execution context)
console.log(dinosaur); // Output: undefined (No error, just empty)
var dinosaur = "T-Rex";
console.log(dinosaur); // Output: "T-Rex"

//in js when we don't give keywords its default creates in global space
userName = "Garima"
console.log(userName)

//let and const Hoisting
/*
Variables created with let and const are technically hoisted too, but JavaScript intentionally blocks you from touching them until the execution line actually reaches them.
This locked-up zone is famously called the Temporal Dead Zone (TDZ). If you try to access them early, your code will crash immediately.
*/
//console.log(laptop); // Throws a ReferenceError! 
// (Cannot access 'laptop' before initialization)
// let laptop = "MacBook";

//TypeScripting - "use strict"
/*
TypeScript is a powerful programming language developed by Microsoft that is a "superset" of JavaScript.
In simple words, it is JavaScript with extra features—specifically, "Types". 
*/
"use strict"
console.log(user);
var user = "Garima";
fn()
function fn(){
    console.log("Hello World")
}
userName = "Garima"
console.log(userName)