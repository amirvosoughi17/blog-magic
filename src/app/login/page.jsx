"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { SlSocialGoogle } from 'react-icons/sl'
import { FaGithub } from 'react-icons/fa'

export default function signup() {
    
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ''
    })

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const response = await axios.post('/api/v1/auth/signin', user);
            router.push('/profile');
            console.log("login Successfully", response.data)
        } catch (error) {
            alert("Login failed")
            console.log('Login failed', error.message)
            setLoading(false)
        }
    }

    return (
        <div className='w-full h-screen flex justify-center bg-stone-900  shadow  '>
            <div className="w-[360px] h-[530px] md:w-[430px] bg-stone-800 text-white mt-3 md:mt-7 rounded-lg flex flex-col items-center py-5 px-2 ">
                <div className="mb-7">
                    <h1 className='text-white font-bold text-3xl'>Log in</h1>
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center justify-center gap-3 bg-emerald-100 w-[310px] md:w-[360px] mt-2 mb-[12px] py-[9px]  border-[1px] border-emerald-800/20 rounded">
                        <SlSocialGoogle className='text-emerald-900' size={23} />
                        <h2 className=' text-emerald-900'>Login with Google</h2>
                    </div>

                    <div className="flex items-center justify-center gap-3 bg-emerald-100 w-[310px] md:w-[360px] mb-5 py-[9px]  border-[1px] border-emerald-800/20 rounded">
                        <FaGithub className='text-emerald-900' size={23} />
                        <h2 className=' text-emerald-900'>Login with GitHub</h2>
                    </div>
                </div>
                <div className="flex gap-[7px] items-center w-[300px] md:w-[360px] my-2">
                    <hr className='text-stone-900 w-[160px] h-[1px]' />
                    <p>or</p>
                    <hr className='text-stone-900 w-[160px] h-[1px]' />
                </div>
                <div className="flex flex-col items-center gap-2 ">
                    <div className="flex flex-col  w-[300px] gap-2 md:w-[360px]">
                        <label className='text-white'>email</label>
                        <input type='email' className='text-emerald-950 text-sm border-[1px] border-stone-500/30 py-[7px] px-2 focus:outline-none rounded-md  ' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>
                    <div className="flex flex-col  w-[300px] gap-2 md:w-[360px]">
                        <label className='text-white'>password</label>
                        <input type='password' className='text-emerald-950 text-sm border-[1px] border-stone-500/30 py-[7px] px-2 focus:outline-none rounded-md  ' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </div>
                    <button className='w-full bg-emerald-400 py-[7px] rounded-md text-emerald-900 mt-4 border-[1px] border-emerald-700 hover:border-1 hover:border-emerald-700' onClick={handleSubmit}>{loading ? "Loading..." : "Login"}</button>
                    <div className="flex items-center w-full my-2">
                        <p className='text-sm text-stone-600' >have an account? </p>
                        <Link className='text-sm text-emerald-600' href="/signup"> Register</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
