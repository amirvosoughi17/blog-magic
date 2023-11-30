import { connect } from "@/configs/database";
import Blog from "@/models/blog.model";
import User from "@/models/user.model";
import { get_user_from_token } from "@/utils/JWTToken";

connect();
// Create a New Blog
export async function POST(request) {
    const body = await request.json();
    const formData = body.formData;
    const { title, description, category } = formData;

    // ***  BLOG CREATION VALIDATIONS   ***

    // Check if requested data's are not empty
    if (!title || !description) {
        return Response.json({ message: "Please fill in all fields" }, { status: 400 });
    }

    //  Check the length of title
    if (title.length < 3) {
        return Response.json({ message: "Title must be more than 3 characters" }, { status: 400 });
    }

    const id = await get_user_from_token(request);
    const user = await User.findOne({ _id: id });
    try {
        const new_blog = await Blog.create({
            title,
            description,
            category,
            author: user.email,
        })
        return Response.json({ message: "your blog created successfully!", data: new_blog }, { status: 201 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}


// Get All created Blogs

export async function GET() {
    try {
        const blogs = await Blog.find();
        const blog_count = await Blog.countDocuments();
        if (blog_count === 0) {
            return Response.json({ message: "No Blog Created, Create one" })
        }
        return Response.json({ blogs, count: blog_count }, { status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}