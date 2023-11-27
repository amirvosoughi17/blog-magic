"use client";
import { useRouter } from "next/navigation";

export default function ProductButton({id}) {
    const router  = useRouter();
    const handleClick = () => {
        router.push(`/blogs/${id}`)
    }
    return (
        <button onClick={handleClick}  className="cursor-pointer my-4 py-[1px] px-2 bg-stone-900 rounded ">view</button>
    )
}