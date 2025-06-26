import React, { useContext} from 'react'
// import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContext from './Context/UserContext'

function App() {
  const {user}=useContext(UserContext);
  return (
    <>
      <UserContextProvider>
        <h1>React with Chai and Code Hello {user.username}</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
