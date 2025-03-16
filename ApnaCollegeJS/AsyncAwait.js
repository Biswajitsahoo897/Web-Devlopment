function getData(dataid) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('data ', dataid);
            resolve("Success");
            // look the data will come from whereever it may take some moments to fetch
        }, 2000);
    })

}



// Async-await with IIFE(Immediately Invoked Function Expression) just add one ( at the beginning and other one at the end then add (); 
// it will be called immediately as soon as it is defined.
(async function getAlldata() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})();

// getAlldata();