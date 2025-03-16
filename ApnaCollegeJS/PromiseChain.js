
function getData(dataid) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('data', dataid);
            resolve("Success");
            // look the data will come from whereever it may take some moments to fetch
        }, 2000);
    })

}

getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    console.log(res);

})