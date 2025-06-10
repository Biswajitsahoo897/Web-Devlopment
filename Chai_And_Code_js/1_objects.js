const mySym =Symbol('mykey1');
const JsUser = {
    name: "Biswajit",
    "full name": "Biswajit Sahoo",
    [mySym]: "mykey1",
    age: 20,
    location: "Puri",
    email: "biswajitsahookunu2005@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "biswajitsahookunu2005@gmail.com"
Object.freeze(JsUser)
// JsUser.email = "biswajitsahookunuhello2005@gmail.com"
console.log(JsUser);

// const course={
//     name:'biswajit',
//     age:19,
//     courseInstructor:'Tripathi sir'
// };
// // console.log(course.age);
// // name is the key or property and 'biswajit' is its value

// // this is the object de-structure
// const {courseInstructor:courseInst}=course;
// console.log(courseInst);
