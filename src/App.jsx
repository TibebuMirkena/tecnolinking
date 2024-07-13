import React from "react";
import Navbar from "./componets/Navbar/Navbar";
import Hero from "./componets/Hero/Hero";
import BrandsLogo from "./componets/BrandsLogo/BrandsLogo";
import Service from "./componets/Service/Service";
import Testemony from "./componets/Testemony/Testemony";
import Tibe from "./componets/Tibe/Tibe";
import Footer from "./componets/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black duration-300">
    <Navbar />
  <Hero />
  <BrandsLogo />
  <Service />
  <Testemony />
  <Tibe />
  <Footer />
  </div>
  );
};

export default App;