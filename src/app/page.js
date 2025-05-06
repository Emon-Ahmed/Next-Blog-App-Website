"use client";
import BlogList from "@/components/blogs/BlogList";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
