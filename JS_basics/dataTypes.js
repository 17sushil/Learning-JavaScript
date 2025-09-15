"use strict";// this enables us to use the newer version of java script / treats newer js throughout this file.

alert("hello")// this gives error here because we are using node.js not the browser to run code.

console.log("hello");console.log("world") // bad practise due to less readability.

console.log(3
    +
    3
)// valid but poor readability

// you can either use semicolon or write code without semocolons both are valid.

/*
some basic datatypes:

number=> its range is about 2^53
also we can use bigint for greater range

string="abcd" //use double or single quotation mark

boolean= true/false

null=> standalone value (blank)
eg: let temperature=null;

undefined=> when value is not assigned to variable it is assigned undefined.

symbol=>used to find uniqueness 

object

*/
console.log(typeof "Ramesh") // string type
console.log(typeof null)// object type (interview question)
console.log(typeof undefined)//undefined type