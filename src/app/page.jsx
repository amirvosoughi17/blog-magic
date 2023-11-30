import Image from 'next/image'
import BlogCard from '@/app/components/BlogCard'

const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/v1/blogs" , {
      cache : "no-store"
    })
    if(!res.ok) {
      throw new Error("failed to fetch blog")
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);

  }
}

export default async function Home() {
  const data = await getBlogs();
  if(!data?.blogs) {
    return <p className='text-emerald-500 flex flex-col items-center justify-center min-h-screen text-4xl'> No Blogs !!</p>
  }

  const blogs = data.blogs;
  const uniqueCategories = [
    ...new Set(blogs?.map(({category}) => category))
  ];
  return (
    <div className='bg-stone-900 text-white w-full h-full overflow-y-auto mx-auto px-2 py-8 md:px-6 '>
      {blogs && uniqueCategories?.map((uniqueCategory , categoryIndex) => 
      <div className="mb-4 w-full " key={categoryIndex}>
        <h2 className='text-3xl text-emerald-400 my-10 text-center'>{uniqueCategory} Blogs</h2>
        <div className="flex flex-wrap items-center gap-5 justify-center">
          {blogs.filter((blog) => blog.category === uniqueCategory).map((filteredBlog , id) => (
            <BlogCard id={id} key={id} blog={filteredBlog} />
          ))}
        </div>
      </div>
      )}
    </div>
  )
}
