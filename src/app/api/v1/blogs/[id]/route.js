import Blog from "@/models/blog.model";
import { connect } from "@/configs/database";
connect();

// get single blog with givin blog 
export async function GET(request, { params }) {
    try {
        const { id } = params;
        const blog = await Blog.findOne({ _id: id });
        return Response.json({ blog }, { status: 200 })
    } catch (error) {
        return Response.json({ error: error.message });
    }
}

// update blog
export async function PUT(request, { params }) {
    const { id } = params;
    const body = await request.json();
    const { title, description, category } = body;

    // check if requested data's are not empty
    if (!title || !description || !category) {
        return Response.json({ message: "Please fill in all fields" }, { status: 400 });
    }
    try {
        const updated_blog = await Blog.findOneAndUpdate({ _id: id }, {
            title,
            description,
            category
        }, {
            new: true,
        });
        return Response.json({ updated_blog }, { status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}

// Delete blog
export async function DELETE(request, { params }) {
    const { id } = params;
    try {
        await Blog.findOneAndDelete({ _id: id });
        return Response.json({ message: "Blog deleted successfully" }, { status: 200 })
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 })
    }
}