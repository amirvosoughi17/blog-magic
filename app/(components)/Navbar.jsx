"use client";
import React from 'react'
import {RiSignalTowerLine} from 'react-icons/ri';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <nav className='w-full fixed top-0 left-0 bg-stone-100/70 border-b-[1px] border-zinc-200/80 py-3 px-4 md:px-7 flex items-center justify-between backdrop-blur-sm  '>
        <div className="flex items-center gap-1">
            <RiSignalTowerLine className='text-emerald-500'size={24} />
            <p className='text-lg font-bold'>Social</p>
        </div>
        <div className="hidden"></div>
        <div className="flex items-center gap-2">
            <Link href='/signup' className='text-sm  bg-emerald-400 py-[4px] text-emerald-950 font-semi outline-2 border-[1px] border-emerald-600  px-3 rounded-md  md:px-4 py-1 '>Sign up</Link>
        </div>
      </nav>
    </div>
  )
}
