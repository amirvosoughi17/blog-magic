import BlogCard from "@/app/components/BlogCard";

export async function generateStaticParams() {

    const res = await fetch('/api/v1/blogs')
    const data = await res.json();
   
    return data.products.map((blog) => ({
      id: blog._id.toString(),
    }))
  }

async function getProducts(_id) {
    const res = await fetch(`/api/v1/blogs/${_id}`);
    const data = await res.json();
    return data;
}

export default async function productPage ({params}) {
    const blog = await getProducts(params._id);
    return (
        <BlogCard title={blog.title} category={blog.category}  />
    )
}