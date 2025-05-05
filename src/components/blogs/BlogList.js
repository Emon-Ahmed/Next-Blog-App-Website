import { blog_data } from "@/assets/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

export default function BlogList() {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      <div className="flex justify-center gap-6  my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
              : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
              : ""
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
              : ""
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xm:mx-24">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((blog, index) => (
            <BlogItem
              key={index}
              id={blog.id}
              name={blog.title}
              image={blog.image}
              category={blog.category}
              description={blog.description}
            />
          ))}
      </div>
    </div>
  );
}
