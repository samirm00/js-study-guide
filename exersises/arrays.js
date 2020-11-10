"use strict";

// arrays are special type of objects

let fruits = ["Banana", "Orange", "Apple", "Mango"];

let fruitsLength = fruits.length;
console.log(fruitsLength);

// Useful array methods

fruits.pop(); // Removes the last element ("Mango") from fruits
console.log(fruits);

fruits.push("Kiwi"); //  Adds a new element ("Kiwi") to fruits
console.log(fruits);

fruits.shift(); // Removes the first element "Banana" from fruits
console.log(fruits);

fruits.unshift("Lemon"); // Adds a new element "Lemon" to fruits
console.log(fruits);