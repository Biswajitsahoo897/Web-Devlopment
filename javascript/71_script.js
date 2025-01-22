// console in the web browser
// document.querySelectorAll

let div =document.createElement("div");
div.innerHTML="I have been created <b>by kunu</b>"
div.setAttribute("class","Created")
document.querySelector(".container").append(div);


let cont=document.querySelector(".container")
cont.insertAdjacentHTML("afterend","hello i am the after contents.")


// // web browser console
// document.querySelector(".container").innerHTML
// // output :- hey i am a box
// document.querySelector(".container").outerHTML
// // output :- hey i am a box and all others things
// document.querySelector(".container").tagName // or .Nodename
// // output:- 'DIV'
// document.querySelector(".container").hidden =true
// //text will be vanished hidden attribute will be added to the HTML 

// document.querySelector(".container").innerHTML= "hey i am an another box"
// //changes made in the div will be added 

// document.querySelector(".box").hasAttribute("style")
// //returns true or false

// document.querySelector(".box").setAttribute("style","display:inline")
// //it will add it 

// document.designMode="on"
// //by this syntax we can edit in the actuall web pages , but by reloading it will vanish

// // document.querySelector.apply(".box").dataset

// document.querySelector(".container").classList.add("this text will be directly appended in the web page")
// //output :- undefined

//document.querySelector(".me").classList
// //output:-   DOMTokenList(2) ['container', 'me', value: 'container me']


// document.querySelector(".container").classList.toggle(".red")
// //true
// document.querySelector(".container").classList.toggle(".red")
// // false
// document.querySelector(".container").classList.toggle(".red")
// // true
// document.querySelector(".container").classList
// // DOMTokenList(2) ['container', '.red', value: 'container .red']