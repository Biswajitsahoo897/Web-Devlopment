let a,b,c;
a=prompt("Enter the value for the a:");
let number = parseInt(a);
b=prompt("Enter the value for the b:");

c=prompt("Enter the operation:");
/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


// let num1 = 20;
// let num2 = 5;
// let operator = "*";
// let result = eval(`${num1} ${operator} ${num2}`); // Correctly evaluates "20 * 5"
// console.log(result); // Output: 100


if (Math.random>0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

} else {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}