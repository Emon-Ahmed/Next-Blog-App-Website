import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";
const fs = require("fs");

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// API Endpoint to get all blogs
export const GET = async (request) => {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blogs = await BlogModel.findById(blogId);
    return NextResponse.json({ message: "API Working", data: blogs });
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ message: "API Working", data: blogs });
  }
};

// API Endpoint For Uploading Blogs
export const POST = async (request) => {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    author_img: `${formData.get("author_img")}`,
  };

  await BlogModel.create(blogData);
  console.log("Blog saved");

  return NextResponse.json({ success: true, message: "Blog Created" });
};

// API Endpoint To Delete Blog
export const DELETE = async (request) => {
  const id = await request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public/${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog Deleted" });
};
