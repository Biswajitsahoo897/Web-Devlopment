import React ,{useEffect,useState} from 'react'
import {Conatiner,PostForm} from '../components'
import appWriteService from '../Appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
function EditPost() {
    const [post,setPost]=useState(null)
    const {slug} =useParams()
    const navigate=useNavigate()
    
    useEffect(()=>{
        if(slug){
            appWriteService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])
  return post?(
    <div className='py-8'>
        <Conatiner>
            <PostForm post={post}/>
        </Conatiner>
    </div>
  ):null
}

export default EditPost
