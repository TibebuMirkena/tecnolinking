import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/c.jpg";
import Img2 from "../../assets/d.jpg";
import Img3 from "../../assets/e.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Someone",
    date: "April 22, 2022",
    aosDelay: "400",
  },
  {
    id: 2,
    image: Img2,
    title: "Camera Instalation",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    aosDelay: "300",
  },
  {
    id: 3,
    image: Img3,
    title: "wire Insatalation",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    aosDelay: "50",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1  data-aos="fade-up" 
          className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div 
          data-aos="fade-up"
          data-aos-delay="900"
          data-aos-offset="0"
          className="text-center mt-4 sm:mt-8">
            <button className="btn-primary">View All Posts</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;