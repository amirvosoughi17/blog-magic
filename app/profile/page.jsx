"use client"
import AdminMenu from '../(components)/AdminMenu'


export default function Admin({children}) {
  return (
    <div className="">
    <div className=" py-4 px-4 md:px-10 md:px-10">
      <AdminMenu />
      <div className="">
      {children}
      </div>

    </div>
    </div>
  )
}
