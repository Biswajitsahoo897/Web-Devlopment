import React, { useEffect, useState } from 'react'

import appWriteService from '../Appwrite/config'
import {Container,PostCard} from '../components'

function AllPosts() {
    const [post,setPost]=useState([])
    useEffect(()=>{},[])
    appWriteService.getAllPost([]).then((posts)=>{
        if (posts) {
            setPost(posts.documents)
        }
    })
    // passed as empty array as we dont have any queries for this moment
  return (
    <div className='w-full py-8'>
        <Container>
            <div className="flex flex-wrap">
                {post.map((post)=>(
                    <div key={post.$id}>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts
