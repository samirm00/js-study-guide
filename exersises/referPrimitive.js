"use strict";

/*
Primitive data type are immutable  

- if we declare a string for example name="Samir " and then we changed the value , javaScript is creating a new variable with the same name and assigned the new value to it 

reference data type are mutable 

- if we declare an array [1.2,3.4] we can change the value of index[0]=1 for example , the array wil not change , only one inside it changed 

- also objects and arrays have properties and methods used to manipulated them 

*/

// primitive type are  immutable  ( can't change )

let name = "Samir"; // here you see the value has changed , yes but Javascript is throwing away the first variable name with value"Samir" and creating a new variable with same
console.log(name); // name and assigned  to the value "John"

name = "John";
console.log(name);

// reference type are mutable  ( can change )

let grades = [60, 100, 85, 40];

console.log(grades);
grades[3] = 60; // here we changed the [3] value from 40 to 60 , notice the array entity does not change only one value inside it

console.log(grades);

console.log(grades.length); // we are using array property

grades.push(10);

console.log(grades); // we are using push() method to add  an item to the end of an Array