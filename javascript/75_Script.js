console.log("Ram is a hacker")
console.log("Joe is a hacker")

setTimeout(() => {
    console.log("I am inside the settimneout")

}, 2000);

console.log("the End")


// output
// Ram is a hacker
// Joe is a hacker
// The End
// I am inside the settimneout

// because of the asynchronous nature of the javascript, the setTimeout function will execute after
const fn =()=>{
    console.log("Nothing");
}
const callback=(args,fn)=>{
    console.log(args);
    fn();
    // return "Bingoooo!!!";
}

const loadScript=(scriptUrl,callback)=>{
    let sc=document.createElement('script');
    sc.src=scriptUrl;
    sc.onload=callback("Bingoooo!!!",fn);
    document.body.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js",callback);


// loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js",(args,fn)=>{
//     console.log(args);
//     fn("firstargs",()=>{
//         ddg("secondargs",()=>{
//             console.log("I am the second function")
//         })
//     });
// });

// CALLBACKS:
// A callback fuction is a fuction passed into another fuction as an argument ,which is then invvoked inside the outer fuction to complete some kind of routine or action.
