import React, { useContext} from 'react'
// import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContext from './Context/UserContext'

function App() {
  return (
    <>
      <UserContextProvider>
        <UserContent />
      </UserContextProvider>
    </>
  )
}

function UserContent() {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>React Series, Hello...{user?.username}</h1>
      <Login />
      <Profile />
    </>
  );
}

export default App
