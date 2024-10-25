import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const{user}  = useContext(UserContext)

    if(!user.username || !user.Password) return <div className='flex justify-center text-center bg-red-500
    text-white'>Please Login!</div>
        return <div className='flex justify-center items-center text-center bg-green-500 text-white' >Welcome! {user.username}</div>
}   

export default Profile