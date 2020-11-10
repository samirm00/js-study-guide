"use strict";

/* Primitive data type are:
1- String which is a  text  between Single quotes or Double quotes
2- Number with decimals or  without decimals 
3- Boolean has two values true or false 
4- Null is just nothing , it is value is empty, it is type is an object 
5- Undefined means it has no value and it type is "undefined" as well
Note : undefined and null are equal in value but different in type.

Reference data type are : 
1- Object are variable with many values  written with curly braces {}.Object properties are written as name:value pairs, separated by commas.
2-Arrays are spacial type of objects are written with square brackets [].Array items or elements  are separated by commas.
3- functions are block of codes designed to perform a particular task. it is type is function and not object
5- classes 
6- maps 
7- sets
*/
// Primative data type

let firstName = "Samir ";                // String 
console.log(typeof firstName);

let age = 35;                            //number  
console.log(typeof age);

const isCold = true;                    //boolean
console.log(typeof isCold);

let lastName;                           //undefined 
console.log(typeof lastName);

let gameScore = null;                   //null
console.log(typeof gameScore);

//Reference data type

let person = {              
  firstName: "John",
  age: 30
}
console.log(typeof person);           //object

let grades = [80 , 58 , 100 , 20 ];   // array   
console.log(typeof grades); 


let hello = (name) =>{

  console.log(`Hello ${name}`);
  console.log(typeof hello);         //Function 
};
let name = "Samir"
hello(name);