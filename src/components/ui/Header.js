import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="px-5 py-5 md:px-12 lg:px-28">
      <div className="flex  justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt="Logo"
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get started
          <Image src={assets.arrow} />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl  sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          non beatae delectus quo repellendus obcaecati sint sapiente vel error
          blanditiis eos enim soluta!
        </p>
        <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
          />
          <button className="border-0 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
