"use client";
import React, { useState } from 'react'
import {RiSignalTowerLine} from 'react-icons/ri';
import Link from 'next/link';
import {IoIosMenu , IoIosClose} from 'react-icons/io'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {AiOutlineUser} from 'react-icons/ai'



export default  function Navbar({id}) {


  const router = useRouter()
  const [loged , setLoged] = useState(true)
  const [menu , setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  }
  const handleClickItems = () => {
    setMenu(!menu);
  }
  
  return (
    <div>
      <nav className='w-full fixed top-0  max-w-7xl bg-stone-800 border-b-[1px] border-zinc-700/90 py-3 px-4 md:px-7 flex items-center justify-between backdrop-blur-sm z-50  '>
        <div className="flex items-center gap-1">
            <RiSignalTowerLine className='text-emerald-500'size={24} />
            <p className='text-lg font-bold text-white'>Social</p>
        </div>
        <div className="hidden md:flex items-center gap-2 ">
          <div className=" text-white text-sm  hover:bg-zinc-600 py-1 px-3 rounded-full">
                <Link href='/'>Home</Link>
              </div>
              <div className=" text-white text-sm   hover:bg-zinc-600 py-1 px-3 rounded-full">
                <Link href='/profile'>profile</Link>
              </div>
              <div className="l text-white text-sm  hover:bg-zinc-600 py-1 px-3 rounded-full">
                <Link href='/profile/addBlog'>new blog</Link>
              </div>
              <div className=" text-white  text-sm  hover:bg-zinc-600 py-1 px-3 rounded-full">
                <Link href='/'>Support</Link>
              </div>
        </div>
        <div className="flex items-center gap-2  ">
            <Link href={`/profile/${id}`} className='text-sm  bg-transparent py-[5px] text-emerald-200 outline-2 border-[2px] border-emerald-400  px-3 rounded-full  md:px-3 py-[2.9px] hover:shadow-sm hover:shadow-emerald-300 '>Account</Link>
        <div className="flex md:hidden items-center gap-2">
            <div className="bg-stone-600 md:hidden text-white py-[3px] px-[4px] cursor-pointer rounded" onClick={handleClick}>
              <IoIosMenu size={23}  />
            </div>
        </div>
        </div>
        {menu ? (
          <div className="fixed top-0 right-0 bg-zinc-700 text-white w-full shadow-xl z-50 h-screen">
            <div className="fixed top-[25px] left-[25px]">
              <IoIosClose size={50} onClick={handleClick} />
            </div>
            <div className="flex flex-col gap-7 items-center justify-center w-full h-screen">
              <div className="text-4xl text-white font-semibold hover:bg-zinc-600 py-1 px-3 rounded-full">
                <Link onClick={handleClickItems} href='/'>Home</Link>
              </div>
              <div className="text-4xl text-white font-semibold hover:bg-zinc-600 py-1 px-3 rounded-full">
                <Link onClick={handleClickItems} href='/profile'>profile</Link>
              </div>
              <div className="text-3xl text-white font-semibold hover:bg-zinc-600 py-1 px-3 rounded-full">
                <Link onClick={handleClickItems} href='/profile/addBlog'>new blog</Link>
              </div>
              <div className="text-3xl text-white font-semibold hover:bg-zinc-600 py-1 px-3 rounded-full">
                <Link onClick={handleClickItems} href='/'>Support</Link>
              </div>
            </div>
          </div>
        ) : ""}
      </nav>
    </div>
  )
}