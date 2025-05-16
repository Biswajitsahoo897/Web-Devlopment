// async function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(45)
//         },1000);
//     })
// }

// let a =await sleep();

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum); 

let [x,y,...rest]=[1,2,3,4,5,6,7,8,9,10];
console.log(x); // 1
console.log(y); // 2
console.log(rest); //this will print the rest [3,4,5,6,7,8,9,10]
console.log(x,y,rest);


let obj={
    a:1,
    b:2,
    c:3
}
let {a,b,c}=obj;

// console.log(obj.a); // 1
