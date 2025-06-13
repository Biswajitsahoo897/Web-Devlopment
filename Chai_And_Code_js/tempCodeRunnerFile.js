// Call & This 
function SetUsername(username){
    //complex DM calls
    this.username=username;
}

function createUser(username,email,Password){
    SetUsername.call(this,username);
    this.email=email;
    this.Password=Password;

}

const user1=new createUser('Biswajit','biswajitSahaoo2005@gmail.com',29023);
console.log(user1);