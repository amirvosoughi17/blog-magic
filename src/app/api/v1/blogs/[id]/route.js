import Blog from "@/models/blog.model";
import { connect } from "@/configs/database";
connect();

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const blog = await Blog.findOne({ _id: id });
        return Response.json({ blog }, { status: 200 })
    } catch (error) {
        return Response.json({ error: error.message });
    }
}