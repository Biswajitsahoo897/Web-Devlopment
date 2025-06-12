const { Profiler } = require("react");

// 1
const PromiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls,cryptogrphy ,networks
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

PromiseOne.then(() => {
    console.log('Promise Consumed');

})


// 2
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");
})


// 3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {//then is only related to the resolve
    console.log(user);
})


// 4 (use of catch,finally)
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = false;
        if (!error){
            resolve({ username: "Biswajit", password: 123 })
        } else {
            reject('ERROR:Something Went Wrong!')
        }
    }, 1000)
});

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((u) => {
    console.log(u);

}).catch((err) => {
    console.log(err);
}).finally(()=>{
    console.log('The Promise is either Resolved or Rejected');    
})


// 5 async,try,catch++++++++++++++++++++++++++++++++++++++++
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async  function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);        
    }
    catch(err){
        console.log(err);        
    }
}

consumePromiseFive()



// use of fetch() 
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json(); 
    })
    .then(data => console.log("Response: ", data))
    .catch(error => console.log("E: ", error));