function asyncFun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data1');
            resolve("Success");
        }, 5000);
    });
};

function asyncFun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data2');
            resolve("Success");
        }, 5000);
    });
};


console.log('Fetching data1');



let p1 = asyncFun1();
p1.then((res) => {
    console.log(res);
    console.log('Fetching data2');
    let p2 = asyncFun2();
    p2.then((res) => {
        console.log(res);
    })

});







function getData(dataid) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('data ', dataid);
            resolve("Success");
            // look the data will come from whereever it may take some moments to fetch
        }, 2000);
    })

}


// Promise Chain
console.log('Getting data 1');

getData(1).then((res) => {
    console.log('Getting data 2');
    return getData(2);
}).then((res) => {
    console.log('Getting data 3');
    return getData(3);
}).then((res) => {
    console.log(res);
});



