function reminder(name) {
    console.log("This is ",name,"from india");
    //the semi colon is optional
    console.log("hey", name," at @8 am there is a meeting!");
    console.log("hey", name," at @10 am have some snackes!");
}
reminder("Biswajit")
//arrow fuction in the js
const func1 =(x)=>{
    console.log("Hey i am an arrow function",x);
}

func1(89);
func1(14);

hello = function() {
    return "Hello World!";
  }
  
console.log(hello());
// Arrow Function with the defalut parameter :
hello1=()=>"hello world! 1"
console.log(hello1());

// Arrow Function With Parameters:
hello2 = (val) => "Hello " + val;
console.log(hello2("Biswajit"));

sum=(a,b,c)=>{
    return a+b+c
}
console.log(sum(4918,2318,1983))