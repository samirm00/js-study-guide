"use strict";

/* In programming, data types is an important concept.To be able to operate on variables, it is important to know something about the type.
- Without data types, a computer cannot safely solve this: let x = 16 + "Hello";  JavaScript will treat the number as a string.

- it is imortatnt to distingush between the primative and reference type because the primative type are immutable and reference typa are mutable 
which aloww us to perform alot fo data minpulation , using methods and properties 

*/ 

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person);

person.age= 25;
person.eyeColor = "black";     // using the dot operator to change the properties value 
console
console.log(person);

person.firstName.toUpperCase();     // using toUpperCase method to change the name uppercase
console.log(person);