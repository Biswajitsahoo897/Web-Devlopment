// import { Children } from "react";

function customreact(reactElement,container){
    /*
    const ele=document.createElement(reactElement.type);
    ele.innerHTML=reactElement.Children;
    //set attributes through props
    ele.href= reactElement.props.href;
    ele.target=reactElement.props.target;
    container.appendChild(ele);
    */

    const ele=document.createElement(reactElement.type);
    ele.innerHTML=reactElement.Children;
    for(const prop in reactElement.props){
        if(prop==Children) continue;
        ele.setAttribute(prop,reactElement.props[prop])

    }
    container.appendChild(ele);
    // Set attributes
    // for (const key in reactElement.props) {
    // }
}

const reactElement = {
    type:'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    Children:'Click me to visit Google'

}
const mainContainer = document.getElementById('root');

customreact(reactElement,mainContainer);

// what is a bundler?
// A bundler is a tool that takes your code and its dependencies, and combines them into a single file or a few files. This is useful for optimizing the loading of web applications by reducing the number of HTTP requests needed to load all the resources.
// what is a transpiler?g
// A transpiler is a tool that converts code written in one programming language into another language. In the context of web development, it often refers to converting modern JavaScript (ES6+) into older versions of JavaScript (ES5) that are compatible with older browsers.