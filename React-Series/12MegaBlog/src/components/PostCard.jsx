import React from 'react'
import appwriteService from '../Appwrite/config.js'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  console.log("Image ID in post:", featuredImage);
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 hover:shadow-lg transition-shadow">
        <div className="w-full flex justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            onError={(e) => { e.target.src = '../assets/image.png' }}
            className="rounded-xl max-h-64 object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold line-clamp-2">{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
