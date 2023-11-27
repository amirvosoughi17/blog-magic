import Blog from "@/(models)/blog.model";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundBlog = await Blog.findOne({ _id: id });
  return NextResponse.json({ foundBlog }, { status: 200 });
}