import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
        const {userid} = useParams();
  return (
    <div className='text-3xl font-bold text-center bg-gray-500 p-5 text-white'>User : {userid}</div>
  )
}

export default User