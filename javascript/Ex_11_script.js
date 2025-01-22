var fact = 1;
let num = 6;
for (let i = num; i > 0; i--) {
    fact *= i;
}
console.log(`The factorial ${num} is:${fact}`);
//why the fuck this program is not running it anyways



// use of the reduce fuction
const factorial = (num) => {
    if (num === 0) return 1; // Factorial of 0 is 1

    return Array.from({ length: num }, (_, i) => i + 1)
        .reduce((acc, current) => acc * current, 1);
};

console.log(`Factorial of ${num} is: ${factorial(num)}`);
