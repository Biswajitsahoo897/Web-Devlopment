import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TestHello from './TestHello.jsx' 

createRoot(document.getElementById('root')).render(

    <App />,
    <TestHello />

)
