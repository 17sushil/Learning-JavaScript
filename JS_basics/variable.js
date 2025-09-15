//we have three ways to define variables: let,var and const.
const customerId=12334
let customerName="Ramesh"// It maintains block scope changes distinct from that lies outside of the block.

var customerAge=24 // if we change the value within the block scope it will also be changed outside of the block.

let customerAddress

if (true){
    customerAge=23
}
console.log(customerAge)// prints 23

console.table([customerId, customerName,customerAge, customerAddress])
