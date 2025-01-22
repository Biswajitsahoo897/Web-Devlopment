let a=9;

function factorial(number){
    let arr =Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c =arr.slice(1,).reduce((a, b)=>{// or else u can write it as .reduce((a,b)=>a*b)
        return a*b
    })

    console.log(`The factorial of ${a} is : ${c}`);
}

factorial(a)