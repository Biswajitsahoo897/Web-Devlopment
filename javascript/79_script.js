let a =prompt("Enter  number :");
let b =prompt("Enter a number :");
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Please check input, Sorry this is not allowed in the javascipt");
}

// let sum=a+b;
// console.log(sum);
// this will show string type output instead of number type output
let sum=parseInt(a)+parseInt(b);
// console.log("The sum is :",sum);
function main(){

    let o=9;
    try {
        console.log("The sum is: ",sum*o);
        return false;
    
    } catch (error) {
        console.log("Error has occured!!!!");
        // console.log(error.SyntaxError);  
        return true;     
        
    }
    finally{
        console.log("files are being closed & DB connection is being closed");
    }
    // if we are using return statement in the try block then the finally block will be executed
    // IF we are using the return statement in the try and catch block then the finally block will be executed

}

let c =main();