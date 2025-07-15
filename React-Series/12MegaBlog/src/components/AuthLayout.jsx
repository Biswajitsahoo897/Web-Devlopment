
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export default function Protected({children,authentication=true}) {
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const authStatus=useSelector(state=>state.auth.status)
    // for redirecting the route 
    useEffect(()=>{

        if(authStatus===true){
            navigate("/")
        } else if(authStatus){
            navigate("/")
        }

        if (authentication && authStatus!==authentication) {
            navigate("/login")
        }
        else if(!authentication && authStatus!==authentication ){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authentication])

  return loader? <h1>Loading...</h1>:<>{children}</>
}




// this is the mechanism how to protect the router, so this is a container 
