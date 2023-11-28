"use client";
import { useRouter } from "next/navigation";

export default function ProductButton({id}) {
    const router  = useRouter();
    const handleClick = () => {
        router.push(`/blogs/${id}`)
    }
    return (
        <button onClick={handleClick}  className="cursor-pointer my-4 py-1 px-7 bg-emerald-400 text-emerald-900 font-semibold  rounded ">view</button>
    )
}