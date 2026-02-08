import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
        const data = useLoaderData();
        // const [data, setData] = useState();
        // useEffect(() => {
        //         fetch('https://api.github.com/users/sajaysharma')
        //                 .then(response => response.json())
        //                 .then(data => {
        //                         console.log(data);
        //                         setData(data);
        //                 })
        // }, [])
        return (
                <>
                        <div className='bg-gray-400 text-white'>
                                <h1 className='text-3xl text-center font-bold mb-3'>Git Hub API Calling</h1>
                                <div className=' flex justify-around py-6 border-5 m-3 border-black rounded-xl'>
                                        <div>
                                                <img className='h-100 w-100 rounded-full' src={data.avatar_url} alt="profile image" />
                                        </div>
                                        <div className='text-2xl font-semibold text-black w-200'>
                                                <h1>{data.bio}</h1>
                                                <h1>GitHub Followers: {data.followers} </h1>
                                                <h1>username : {data.login}</h1>

                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default Github

export const gitHubInfoLoader = async () => {
        const response = await fetch('https://api.github.com/users/sajaysharma')
        return response.json();
}