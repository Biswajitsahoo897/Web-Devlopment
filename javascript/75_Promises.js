console.log('Thus i hate promises');
//the solution to the callback hell is promises.
// A promise is a promise of code execution , the code either executes or fails in both the cases the promise is settled.

let a = Math.random();

let prom1 = new Promise((resolve, reject) => {
    if (a < 0.5) {
        console.log('No!, the random number is not supporting you');

    }
    else {
        setTimeout(() => {
            console.log('yes i am done');
            resolve('Biswajit');
        }, 3000);
    }
});
// resolve and reject are two callbacks provided by javascript itself they are called like this:
// resolve():if the job is finished succsessfully 
//  and reject(): if the job is fails

// the promise object returned by the new promise constructor has these properties:
// state: pending, fulfilled, or rejected
// result: an arbitrary value of your choosing, initially undefined
// the promise object returned by the new promise constructor has these methods:


let prom2 = new Promise((resolve, reject) => {
    if (a < 0.5) {
        console.log('No!, the random number is not supporting you 2');

    }
    else {
        setTimeout(() => {
            console.log('yes i am done 2');
            resolve('Biswajit 2');
        }, 1000);
    }
});

prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});
// output   
// it will first go to the promise and then it will go to the then block
// allSettled :waits for all promises to be settled (each may resolve or reject) and returns an array of promise state objects, each having a status of fulfilled or rejected.
// all will return the promise if all the promises are resolved
// race will return the promise which is resolved first
// any :waits for the first promise to be resolved or rejected and returns the result of that promise.



// Promise API methods ,.all,.allSettled,.race,.any,.resolve,.reject
let p3 = Promise.allSettled([prom1, prom2]);
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});


