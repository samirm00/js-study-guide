"use strict";

/*
typeof operator used to find the type of a JavaScript variable it returns the type of a variable or an expression
*/ 
let name = "John";
console.log(typeof name);       //  Returns "string"

const ratio = 2.5;
console.log(typeof ratio);       //  Returns number

let isClient = true;
console.log(typeof isClient);       //  Returns boolean 

let person = undefined;
console.log(typeof person);       //  Returns undefined

let score = null;
console.log(typeof score);       //  Returns object

let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(typeof person);     //  Returns object

let numbers = [1,2,3,4] ; 
console.log(typeof numbers);     //  Returns object

let hello = (name) =>{

  console.log(`Hello ${name}`);
  console.log(typeof hello);         // Returns Function 
};
let name = "Samir"
hello(name);