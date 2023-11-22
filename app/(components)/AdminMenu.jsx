import React from 'react'
import Link from 'next/link';
import {IoIosMenu , IoIosAdd} from 'react-icons/io'
import {FiUser} from 'react-icons/fi'
import { useState } from 'react';
import {RiSignalTowerLine } from 'react-icons/ri';
import {AiFillLike} from 'react-icons/ai'
import {IoIosClose} from 'react-icons/io'



export default function AdminMenu() {
    const [menu , setMenu] = useState(false);
  const handleMenu  = () => {
    setMenu(!menu)
  }
  return (
    <div>
      <div className="w-full flex items-center justify-center ">
        <nav className='fixed bottom-[40px] md:bottom-[60px] flex justify-between w-[370px] bg-zinc-100/50 z-50  text-gray-800 backdrop-blur-sm  py-3 px-[14px] rounded-full  border border-gray-400/30 '>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-[1px] text-sm text-emerald-900 bg-emerald-200 py-[2px] px-2 rounded-full">
              <FiUser />
              <Link href='/profile/user'>Profile</Link>
            </div>
            <div className="flex items-center gap-[1px] text-sm text-gray-600">
              <IoIosAdd />
              <Link href='/profile/addBlog'>new blog</Link>
            </div>
            <div className="flex items-center gap-[1px] text-sm text-gray-600">
              <IoIosMenu />
              <Link href='/profile'>blog list</Link>
            </div>
          </div>
          <div className="">
            <button className='text-red-800 bg-red-200 rounded-lg py-[4px] px-[7px] text-sm'>Log out</button>
          </div>
        </nav>
      </div>
    </div>
  )
}
