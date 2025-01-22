console.log("This is strings tutorial")
let a = "Biswajit Sahoo";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

let real_name = "Misri"
let friend = "Prateek Kuhad"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "The Conqueror"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)//string is immutable that means it holds the original string .
console.log(a.valueOf())