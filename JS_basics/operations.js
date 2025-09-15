let a=3
let b=5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a%b)
console.log(a/b)
console.log(a**b)

console.log("2"+1+3) 
console.log(2+1+"3")
console.log(2+"1"+3)

// //  "+" infront of any datatype acts as a unary operator and tries to convert the datatype into number type.

console.log(+true)//1
console.log(+"")//0
console.log(+"123");   // 123  (string → number)
console.log(+"3.14");  // 3.14
console.log(+true);    // 1
console.log(+false);   // 0
console.log(+null);    // 0
console.log(+undefined); // NaN (Not a Number)

// postfix and prefix operator
// let x=3;
// let y=x++;
// console.log(x,y); // x=4, y=3

let x=3;
let y=++x;
console.log(x,y); // x=4, y=4