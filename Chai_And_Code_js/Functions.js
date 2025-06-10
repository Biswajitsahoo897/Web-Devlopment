// function calculateCartPrice(...num1){
//     // console.log(num1.length);
//     // console.log(num1[0]);
//     let count=0,sum=0;
//     num1.forEach((ele)=>{
//         count++;
//         sum+=ele;
//     })
//     console.log(sum);
    
//     return num1;
// }

// const c1=calculateCartPrice(233,903,716,891);
// console.log(c1);





const user = {
    username: "Binaya Kumar",
    price: 723,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
console.log(user);


// +++++++++++++++++++++++ HOISTING IN Js+++++++++++++++++++++
greet()

function greet(){
    let userName='biswa';
    console.log(userName);

    // console.log(this.userName);
    // u can't use this keyword in the function 
}
// ----------------------------------------------------------




// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hesienberge')