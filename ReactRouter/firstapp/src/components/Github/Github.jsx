// import React, { useEffect } from 'react'
// import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
//     let[data,setData] = useState([]); 
//     useEffect(()=>{
// fetch('https://api.github.com/users/Imagekafle10')  //This Link Api Of Github
//  .then(response=>response.json())
// .then(data =>{
//     console.log(data);
//     setData(data)
// })
//     },[])

return (
    <div className='text-center p-4 text-xl m-4 bg-gray-600 text-white'>
        Github Followers: {data.id}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
  )
}

export default Github


export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Imagekafle10')
    return response.json()

}