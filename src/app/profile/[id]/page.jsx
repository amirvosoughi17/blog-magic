
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import ProfileCard from '@/app/components/ProfileCard';

// async function getUsers(id) {
// 
// }

const logout = async () => {
  try {
    await axios.get(`/api/v1/auth/signout`)
    router.push('/login');
    console.log('user loged out successfully')
  } catch (error) {
    console.log('failed to log out')
  }
}

export default async function Profile(request, { params }) {
  const res = await fetch(`api/v1/users/${params}`);
  const user = await res.json();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-5 text-white'>
      <ProfileCard username={user.username} email={user.email} password={user.password} />
      <button onClick={logout} className='bg-red-300 rounded-full py-1 px-4 border-red-800 text-red-800'>Logout</button>
    </div>
  )
}


