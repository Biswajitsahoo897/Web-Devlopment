// function getData(dataid, getNextData) {
//     setTimeout(() => {
//         console.log('data', dataid);
//         resolve("Success");
//         if (getNextData) {
//             getNextData();
//         }
//         // look the data will come from whereever it may take some moments to fetch
//     }, 2000);
// }


let initialPromise = new Promise((resolve, reject) => {
    console.log('I am a Promise');
    resolve("Success");
    // reject("Some Problem Occurred");
});

// let finaValue=getData(345);



const getPromise =()=>{
    return new Promise((resolve,reject)=>{
        console.log('I am a Promise');
        resolve("Success");
    });
};

let promise = getPromise();
promise.then((res)=>{
    console.log('Promise Fulfilled',res);
});

promise.catch((err)=>{
    console.log('Rejected',err);
    
});