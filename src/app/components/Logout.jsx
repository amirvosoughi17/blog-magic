import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Logout() {
    const router = useRouter();
    const logout  = async () => {
        try {
            await axios.get('/api/v1/signout');
            router.push('/login')
            console.log("Logout Successfully");
        } catch (error) {
            console.log('logout failed' , error.message);
        }
    }

  return (
    <button onClick={logout} className='py-1 px-5 bg-red-400 text-gray-900 rounded font-semibold'>
        Logout
    </button>
  )
}
