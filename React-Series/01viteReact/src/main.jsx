import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { jsx as _jsx } from 'react/jsx-runtime'
import App from './App.jsx'
import TestHello from './TestHello.jsx' 

// function MyApp(){
//     return(
//         <div>Biswajit</div>
//     )
// }
/*

const ReactElement = {
    type:'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    Children:'Click me to visit Google'

}
    */
//this is not working because we are not using the proper react keypairs

// const anotherReactElement=(
//   <a href="https://www.google.com" target="_blank" >Click To Visit Google</a>
// )
//it is just a JSX element, Which is transpiled to a React element by Babel or another transpiler.
//it becomes a call to React.createElement 
const anotherUser='Biswajit'
const ReactElement=React.createElement(
    'a',
    {href: "https://www.google.com", target: '_blank'},
    'Click me to visit Google',
    anotherUser
)
/*1:tags,html elements 
2:props
3:children
4:Variables Injectionmnj 
 */
createRoot(document.getElementById('root')).render(
    ReactElement
    // <App/>
    // anotherReactElement

)
