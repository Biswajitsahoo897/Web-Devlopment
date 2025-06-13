//Basic OOP 1
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


// Call & This 
function SetUsername(username){
    //complex DM calls
    this.username=username;
}

function createUser(username,email,Password){
    SetUsername.call(this,username);
    //this will refer to the current context of createUser
    // what is current context?
    // ans: current context is the object that is being created by the constructor function
    this.email=email;
    this.Password=Password;

}

const user1=new createUser('Biswajit','biswajitSahaoo2005@gmail.com',29023);
console.log(user1);