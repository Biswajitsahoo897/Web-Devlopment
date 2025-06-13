function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this;
}
const userOne=user('Biswajit',18,true);
console.log(userOne);