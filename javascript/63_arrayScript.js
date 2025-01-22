// // array are variable which can hold more than one value
// const fruits= [7,"me","BBSR",89]
// console.log(fruits[0])
// console.log(fruits[2])
// fruits[1]="me&myself"

// console.log(fruits.length)//returns the length of the array


// let arr=[1,2,4,6,67,28,46]
// console.log(typeof(arr))//returns the object
// console.log(arr.join(" and "))
// console.log(arr.toString())
// //to strings implies that it converts an array to a string of comma separated values
// // join() =>joins all the array elements using a separtor 


let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2)    // it just start index from 1(refers to the position) and remove 2 elements(no of elements) from the array
numbers.splice(1, 3)  
numbers.splice(1, 3, 222, 333) 
console.log(numbers) 
// (4) [1, 222, 333, 5]
numbers.push(19);//modifies the array and return the original length of the array
numbers.push(9);//modifies the array and return the original length of the array
numbers.push(53);//modifies the array and return the original length of the array
numbers.push(60);//modifies the array and return the original length of the array
// console.log(numbers.indexOf(2))
console.log(numbers.shift(3))//remove the first element and returns it
console.log(numbers.unshift("Mumbai"))//add the first element in the array
//adds elements to the beginning returns now array length

console.log(numbers)
numbers.reverse()//reverse the entire array
console.log(numbers)

let arr_num=[1,3,5,78,90,129,22]
delete arr_num[3]
console.log(arr_num)//[ 1, 3, 5, <1 empty item>, 90, 129, 22 ]


let a1=[1,2,4,9]
let a2=[89,22,39]
let a3=[49,23,3]
// it doesn't make any kind of changes in the existing array
console.log(a1.concat(a2,a3))
//output returns 
//[
    // 1,  2,  4,  9, 89,
    // 22, 39, 49, 23,  3
//   ]
a3.sort()
console.log(a3)
a3.splice(2,3,45,46,37)
console.log(a3)//[ 23, 3, 45, 46, 37 ]