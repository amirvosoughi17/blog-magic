import React from 'react'


export default function ProfileProvide({children}) {
  return (
    <div>
        <div className='bg-stone-200 h-screen w-full  '>
            <div className='md:pl-[120px]'>
              {children}
            </div>
        </div>
    </div>
  )
}
