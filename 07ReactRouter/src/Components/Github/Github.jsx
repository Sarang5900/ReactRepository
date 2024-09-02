import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-xl'>Github UserName: {data.login}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
        <div className='text m-4 bg-gray-600 text-white p-4 text-xl'>Location: {data.location}
        <div className='text bg-gray-600 text-white text-xl'>CreatedAt: {data.created_at}</div>
        </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Sarang5900')
    return response.json()
}