"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: ''
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/v1/blogs', {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json"
      })
      router.push('/');
    } catch (error) {
      console.log(error.message, "failed to create blog");
      setLoading(false)
      router.refresh('')
    }
  }

  return (

    <div>
      <div className="w-full py-5 px-2 md:px-10 bg-stone-900 h-screen text-white">
        <div className="flex items-center flex-wrap w-full justify-center gap-10">

          <div className="bg-stone-800 w-[370px] rounded-md py-3 px-4 shadow-sm">
            <div className="flex flex-col items-center  ">
              <h1 className='text-2xl font-bold text-center mt-6 text-white'>Add New Blog</h1>
              <div className="">
                <div className='flex flex-col my-10 gap-2'>
                  <div className="flex flex-col gap-1 ">
                    <label htmlFor="title" className='text-white '>Title</label>
                    <input name='title' type='text' className='w-[270px] bg-stone-600 py-[4px] px-2 rounded-sm border-[1px] border-zinc-400/30' value={formData.title} onChange={handleChange} required />
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <label htmlFor="title" className='text-white '>Description</label>
                    <input name='description' type='text' className='w-[270px] bg-stone-600 py-[4px] px-2 rounded-sm border-[1px] border-zinc-400/30' value={formData.description} onChange={handleChange} required />
                  </div>
                  <div className="flex flex-col  gap-2">

                    <label htmlFor="category" className='text-white '>category</label>
                    <select name="category" value={formData.category} className=' w-[270px] bg-stone-600 py-[6px] px-2 rounded-sm border-[1px] border-zinc-400/30 mb-7' onChange={handleChange}>
                      <option value="software">software</option>
                      <option value="hardware">hardware</option>
                      <option value="AI">AI</option>
                    </select>
                  </div>
                  <button className='w-[270px] bg-emerald-500 py-[5px] rounded text-emerald-900 border-[1px] border-emerald-600 cursor-pointer' onClick={handleSubmit}>{loading ? "Loading..." : "Create"}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[360px] md:w-[500px] h-[438px] bg-stone-800">
            Blog List
          </div>
        </div>
      </div>
    </div>

  )
}
