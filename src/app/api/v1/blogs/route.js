import { connect } from "@/configs/database";
import Blog from "@/models/blog.model";
import { jwtDecode } from "jwt-decode";
connect();

export async function POST(request) {
    const body = await request.json();
    const { title, description, category } = body;

    // ***  BLOG CREATION VALIDATIONS   ***

    // Check if requested data's are not empty
    if (!title || !description) {
        return Response.json({ message: "Please fill in all fields" }, { status: 400 });
    }

    //  Check the length of title
    if (title.length < 3) {
        return Response.json({ message: "Title must be more than 3 characters" }, { status: 400 });
    }

    // ***     Recive Authenticated user ID (current user)  for put in author        ***
    const token = request.cookies.get('access_token') //   get setted cookie 
    const user = jwtDecode(token?.value) // decode the access_token cookie value for recive user id
    const userId = user.id

    try {
        const new_blog = await Blog.create({
            title,
            description,
            category,
            author: userId,
        })
        return Response.json({ message: "your blog created successfully!", data: new_blog }, { status: 201 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}