
import DeleteBlock from "./DeleteBlock"
import Image from 'next/image';
import oImage from '../../../public/office.jpg'
import CardButton from './CardButton'
import Link from 'next/link';

const BlogCard = ({blog}) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year : "numeric",
      month : "2-digit",
      day  : "2-digit",
      hour12  : true
    }
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-Us" , options);
    return formattedDate
  }

  return (
    <div className="w-[350px] bg-stone-800 text-white">
        <Image src={oImage} width={350} height={200} alt="blog image" className=" object-cover" />
        <div className="flex flex-col items-center px-4 py-4 gap-4">
              <div className="flex flex-col items-center gap-3">
                <h1 className="text-lg font-bold text-white">{blog.title}</h1>
                <p className="text-gray-300 text-sm">{blog.description}</p>
              </div>
              <span className="border-t-[1px] w-full border-gray-500/60"></span>
              <div className="flex items-center justify-between w-full">
                <CardButton  />
                <p className="text-sm text-gray-100">Created by</p>
              </div>
        </div>
    </div>
  )
}

export default BlogCard