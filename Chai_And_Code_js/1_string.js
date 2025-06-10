const name="Biswajit";

console.log(`hello my name is ${name}`);

const gameName='hello world!!'
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Biswajit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "biswajit%20sahookunu2005@gmail.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('bis'))

console.log(gameName.split('-'));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());