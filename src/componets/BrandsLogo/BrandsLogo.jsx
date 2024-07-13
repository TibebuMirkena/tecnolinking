import React from 'react'
import Brand1 from "../../assets/1.svg";
import Brand2 from "../../assets/2.svg";
import Brand3 from "../../assets/3.svg";
import Brand4 from "../../assets/5.svg";
const BrandsLogo = () => {
  return <>
  <div className="container mb-12 mt-12 sm:mt-0">
<p data-aos="fade-up"
className="text-center">Powering next-gen componies</p>
<div data-aos="fade-up"
className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">  
    < img src ={Brand1} alt="" />
    < img src ={Brand2} alt="" />
    < img src ={Brand3} alt="" />
    < img src ={Brand4} alt="" />
</div>
  </div>
  
  </>;
  
};

export default BrandsLogo;