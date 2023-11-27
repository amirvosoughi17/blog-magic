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
    return <p>no blogs</p>
  }

  const blogs = data.blogs;
  const uniqueCategories = [
    ...new Set(blogs?.map(({category}) => category))
  ];
  return (
    <div className='bg-stone-900 w-full h-screen mx-auto px-2 py-8 md:px-6 '>
      {blogs && uniqueCategories?.map((uniqueCategory , categoryIndex) => 
      <div className="mb-4" key={categoryIndex}>
        <h2>{uniqueCategory}</h2>
        <div className="flex flex-wrap items-center gap-5 justify-center">
          {blogs.filter((blog) => blog.category === uniqueCategory).map((filteredBlog , _index) => (
            <BlogCard id={_index} key={_index} blog={filteredBlog} />
          ))}
        </div>
      </div>
      )}
    </div>
  )
}
