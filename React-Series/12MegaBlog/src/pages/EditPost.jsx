import React ,{useEffect,useState} from 'react'
PostForm
import appWriteService from '../Appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, PostForm } from '../components'
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
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ):null
}

export default EditPost
