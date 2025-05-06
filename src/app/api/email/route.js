import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// API Endpoint to get all blogs
export const GET = async (request) => {
  const email = await EmailModel.find({});
  return NextResponse.json({ message: "API Working", data: email });
};

// API Endpoint For Uploading Blogs
export const POST = async (request) => {
  const formData = await request.formData();
  const emailData = { email: `${formData.get("email")}` };

  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, message: "Email Created" });
};

// API Endpoint To Delete Blog
export const DELETE = async (request) => {
  const id = await request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ message: "Email Deleted" });
};
