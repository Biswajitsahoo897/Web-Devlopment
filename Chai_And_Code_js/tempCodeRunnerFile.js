fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        console.log("Response: ", response.json()); 
       
    })
    .then(data => console.log(data))
    .catch(error => console.log("E: ", error));