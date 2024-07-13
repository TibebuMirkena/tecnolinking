import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Dawite Kebede - Wendemamoche hotela, Adama",
    text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    img: "https://www.shutterstock.com/shutterstock/photos/2242293835/display_1500/stock-photo--addis-ababa-ethiopia-july-happy-young-ethiopian-man-2242293835.jpg",
  },
  {
    id: 1,
    name: "Sebele Alemayew - Director of Design and Fashion, Adis Abeba",
    text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    img: "https://www.shutterstock.com/shutterstock/photos/333837275/display_1500/stock-photo-african-woman-333837275.jpg",
  },
  {
    id: 1,
    name: "Abreham Wendemu - Web developer and Ceo of meraf plc, New York",
    text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    img: "https://www.shutterstock.com/shutterstock/photos/1846500295/display_1500/stock-photo-handsome-black-african-man-smiling-happy-outdoors-1846500295.jpg",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;