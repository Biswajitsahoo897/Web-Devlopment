import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const { userid } = useParams()
    return (
        <div className='bg-grey-100 text-center p-4 rounded-lg shadow-md text-2xl font-bold text-white'>
            User: {userid}
        </div>
    )
}

