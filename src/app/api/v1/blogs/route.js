import Blog from '../../../../(models)/blog.model';
import {NextResponse} from 'next/server'
import { connect } from '@/configs/database';

connect();

export async function POST(req){

    try {
        const body  = await req.json();
        const blogData = body.formData
        await Blog.create(blogData)
        return NextResponse.json({message : "Blog Created" } , {status : 201});
    } catch (error) {
        return NextResponse.json({message : "Error" , error} , {status : 500});
    }
}


export async function GET(){
    try {
        const blogs = await Blog.find();
        return NextResponse.json({blogs} , {status : 200});
    } catch (error) {
        return NextResponse.json({message : error.message} , {status : 500})
    }
}