import { assets } from "@/assets/assets";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

export default function BlogTableItem({ blog, deleteBlog }) {
  const BlogDate = new Date(blog.date);
  console.log(blog);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          width={40}
          height={40}
          src={blog.author_img ? blog.author_img : assets.profile_icon}
          alt=""
        />
        <p>{blog.author ? blog.author : "No Author"}</p>
      </th>
      <td className="px-6 py-4">{blog.title ? blog.title : "No Title"}</td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td
        className="px-6 py-4 cursor-pointer"
        onClick={() => deleteBlog(blog._id)}
      >
        X
      </td>
    </tr>
  );
}
