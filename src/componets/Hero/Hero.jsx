import React from "react";
import HeroImg from "../../assets/tibe.jpg";

const Hero = () => {
  return (
    <>
<main className="bg-white dark:bg-gray-950 dark:text-w duration-300">
    <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-2 gap-4 place-items-center">
{/* img sec*/}
<div data-aos="zoom-in" className="order-1 sm:order-2 relative">
<img src={HeroImg} alt="" />
<div data-aos="slide-right"
data-aos-delay="300"
className="absolute -bottom-5 right-0 sm: -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md">
  <p>## PROJECTS</p>
  <h1 className="font-bold"> 500+ <span className="font-normal"> DONE</span></h1>
</div>
</div>
{/* img sec*/}
<div className="space-y-5 order-2 sm:order-1 xl:pr-40">
    <h1 
    data-aos="fade-up" 
    className="text-4xl sm:text-5xl font-semibold">Building your Campony whith <span className="text-primary">Tecno Link</span> </h1>
    <p data-aos="fade-up" data-aos-delay="300"> Your partner in navigating the ever-evolving landscape of digital
              marketing. From conceptualization to execution, we craft tailored
              solutions that drive results and elevate your brand to new
              heights.</p>
              <button  data-aos="fade-up" 
              data-aos-delay="500"
               className="btn-primary transition-all duration-300">Get to start</button>
</div>
</div>
    </div>
</main>
    </>
  );
};

export default Hero