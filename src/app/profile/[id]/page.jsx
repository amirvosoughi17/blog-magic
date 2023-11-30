"use client";
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = ({params}) => {
  const router = useRouter()
    const logout = async () => {
        try {
            await axios.get('/api/v1/auth/signout')
            router.push('/login');
            console.log('user loged out successfully')
        } catch (error) {
            console.log('failed to log out')
        }
    }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-5 text-white'>
      Welcome back {params.id}
      <button onClick={logout} className='bg-red-300 rounded-full py-1 px-4 border-red-800 text-red-800'>Logout</button>
    </div>
  )
}

export default page
