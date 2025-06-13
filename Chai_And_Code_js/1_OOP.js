const user={
    username:"Biswajit",
    loginCount:8,
    signedIn:true,
    getuserDetails :function(){
        console.log("Got user details from database")
        console.log(`username:${this.username}`);
        console.log(this);
        
    }
    
}
// user.getuserDetails()

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;//this means current context

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this;
}
const userOne=new User('Biswajit',40,true);
const userTwo=new User('Binaya',50,false);
console.log(userOne.constructor);
console.log(userTwo);


