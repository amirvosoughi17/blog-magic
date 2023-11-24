"use client"
import React , {useState} from 'react'
import ProfileProvide from '../index'
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();
  const handleChange = (e) => {
    setFormData({
      ...formData ,
      [e.target.name] : e.target.value
    })
  }
  const [loading ,setLoading] = useState(false);
  const [formData , setFormData] = useState({
    title : '',
    description : '',
    category : "software"
  })

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/blog' , {
        method : "POST" ,
        body  : JSON.stringify({formData}),
        'content-type' : "application/json"
      } )
      router.push('/');
    } catch (error) {
      throw new Error ("failed to create blog")
      setLoading(false)
    }
  
  }

  return (
    <div>
      <div>
        <div className="w-full py-5 px-10">
          <div className="w-full h-full  bg-white rounded-md py-3 px-4 shadow-sm">
            <div className="flex flex-col items-center  ">
              <h1 className='text-xl font-bold text-center text-zinc-800'>Add New Blog</h1>
              <div className="">
                <div className='flex flex-col my-10 gap-2'>
                  <div className="flex flex-col gap-1 ">
                    <label htmlFor="title" className='text-slate-800 '>Title</label>
                    <input name='title' type='text' className='w-[270px] bg-zinc-100/40 py-[4px] px-2 rounded-sm border-[1px] border-zinc-400/30' value={formData.title} onChange={handleChange}  required />
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <label htmlFor="description" className='text-slate-800 '>Description</label>
                    <input name='description' type='text' className='w-[270px] bg-zinc-100/40 py-[4px] px-2 rounded-sm border-[1px] border-zinc-400/30' value={formData.description} onChange={handleChange}  required />
                  </div>
                  <div className="flex flex-col  gap-2">
                    <label htmlFor="category" className='text-slate-800 '>category</label>
                  <select name="category" value={formData.category} className= ' w-[270px] bg-zinc-100/40 py-[6px] px-2 rounded-sm border-[1px] border-zinc-400/30 mb-7' onChange={handleChange} required>
                      <option value="software">software</option>
                      <option value="hardware">hardware</option>
                      <option value="ai">Ai</option>
                  </select>
                  </div>
                  <button className='w-[270px] bg-emerald-500 py-[5px] rounded text-emerald-900 border-[1px] border-emerald-600 cursor-pointer'>{loading ? "Loading..." : "Create"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
