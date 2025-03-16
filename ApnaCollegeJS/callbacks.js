function getData(dataid, getNextData) {
    setTimeout(() => {
        console.log('data', dataid);
        if (getNextData) {
            getNextData();
        }
        // look the data will come from whereever it may take some moments to fetch
    }, 2000);
}
// getData(1);
// getData(2);
// getData(3);  
// the upper three function will be executed after 2s at once 
// what if the second instruction depends on the first one for that
getData(1, () => {
    console.log('Getting data 2');
    getData(2, () => {
        console.log('getting data 3')
        getData(3, () => {
            console.log('getting data 4');
            getData(4);
        });
    });
});

// this is the pyramid of doom or the CALLBACK HELL
// this style of programming becomes difficult to understand & manage 