async function getData() {
    // Simulate getting data from a server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 5500);
    });
}



console.log('loading...Modules');
console.log('Do something else');

console.log('Loading data');

let data=getData();
data.then(()=>{
    console.log(data);
    console.log('Process data');
    console.log('task 2');
    
})

console.log('Process data');
console.log('task 2');
console.log(data);

    
    
  // code-2
async function getData() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // let y = await x.json();
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    // console.log(y);  this will do the exact same thing as the below line
    // return y;
    
    let data = await x.json() 
    return data;
    
}
 // settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully
 
async function main(){
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2")

}
main()