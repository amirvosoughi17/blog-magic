import React from 'react'
import AdminMenu from '../(components)/AdminMenu'


export default function ProfileProvide({children}) {
  return (
    <div>
        <div className='bg-stone-200 h-screen w-full  '>
            <AdminMenu />
            <div className='md:pl-[120px]'>
              {children}
            </div>
        </div>
    </div>
  )
}
