import { useState,useContext } from 'react'
import UserContext from '../Context/UserContext';


function Login(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const {setUser}=useContext(UserContext);
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        setUser({username,password})

    }

    return(
        <div>
            <br />
            <h1>Login</h1>
            <input type="text" 
            placeholder="Username"
            value={username}
            onChange={(e)=>{
                setUsername(e.target.value);
                }}
            />
            <input type="" />
            <input type="password" 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            placeholder="Password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export default Login