"use client";
import React from 'react'
import Link from 'next/link';
import {FiUser} from 'react-icons/fi'
import { useState } from 'react';
import {RiSignalTowerLine } from 'react-icons/ri';
import {AiFillLike} from 'react-icons/ai'
import {IoIosClose , IoIosArrowBack , IoIosArrowForward , IoIosMenu , IoIosAdd} from 'react-icons/io'
import axios from 'axios';
import { useRouter } from 'next/navigation';


export default function AdminMenu() {
  const router = useRouter();
  const [AdminMenu , setAdminMenu] = useState(true);
  const handleClick = () => {
    setAdminMenu(!AdminMenu);
  }
  const logout = async () => {
    try {
     await axios.get('/api/auth/v1/signout');
     router.push('/login')
     console.log('Logout successfully');
    } catch (error) {
     console.log(error.message)
    }
 }
  return (
    <div className="">

      {AdminMenu ? (
    <div className="w-full h-screen absolute mt-1">
      <div className="fixed top-[55px] left-0 bg-zinc-800  border-r border-lime-600/30 h-screen w-[140px]">
        <IoIosArrowBack onClick={handleClick}  className='fixed left-[105px] top-[70px] text-white py-[1x] px-[1px] rounded-full cursor-pointer bg-zinc-500 ' size={24}/>
        <div className="flex flex-col items-center justify-between  h-full    gap-4 py-7 px-2">
          <div className="flex flex-col items-center gap-[70px] mt-10">
            <div className="text-emerald-400">
              <RiSignalTowerLine size={40} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-200  flex items-center gap-[8px] hover:bg-stone-600 rounded-full py-[2px] px-2 ">
                <FiUser />
                <Link href='/profile'>Profile</Link>
              </div>
              <div className="text-gray-200 flex items-center gap-[4px] hover:bg-stone-600 rounded-full py-[2px] px-2">
                <IoIosAdd size={18}/>
                <Link href='/profile/addBlog'>new blog</Link>
              </div>
              
              <div className="text-gray-200 flex items-center gap-[4px] hover:bg-stone-600 rounded-full py-[2px] px-2">
                <IoIosMenu size={18}/>
                <Link href='/profile/blogList'>Blog List</Link>
              </div>
              <div className="text-gray-200 flex items-center gap-[4px] hover:bg-stone-600 rounded-full py-[2px] px-2">
                <AiFillLike size={18}/>
                <Link href='/profile/liked'>liked</Link>
              </div>
            </div>
          </div>
          <div className="mb-[70px] ">
            <button className='bg-red-200 rounded-full py-[3px] px-3 text-red-700 ' onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
    
      ) : (
        <div className="flex items-center gap-1 pt-[20px] pl-[20px]">
          <IoIosArrowForward onClick={handleClick} className='py-[1px] px-[1px] rounded-full bg-zinc-700 text-white ' size={24} />
          <p>menu</p>
        </div>
      )}
    </div>
  )
}
