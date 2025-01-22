let arr = [1,4,7,10,15,20,30,40,45];
// let newArr = arr.map((e , index, array)=>{
//     return e**2;
// })
// console.log(newArr)

let newArr = arr.map((e, index) => {
    return index % 2 === 0 ? e * 2 : e; // Double elements at even indices
});
console.log(newArr); // Output: [20, 20, 60, 40]



greaterThanSeven = (e)=>{
    if(e>=7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))


// map() -> Transforms each element and returns a new array.
// filter()-> Selects elements that satisfy a condition and returns a new array.
// reduce() -> Accumulates elements into a single value (e.g., sum, total, or concatenation).