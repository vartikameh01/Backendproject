const addToCart = require("./cartModule");

console.log("Hello, Node.js is running correctly!");
console.log(10 + 90);

let l = [10, 20, 30, 40, 50];
l.forEach((value, index) => {
    console.log(value, index);
});

console.log(addToCart()); 
console.log("Welcome");
