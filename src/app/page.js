"use client";
import BlogList from "@/components/blogs/BlogList";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
