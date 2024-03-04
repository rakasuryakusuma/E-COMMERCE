import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/jamu.png";
import Image2 from "../../assets/hero/bahan.png";
import Image3 from "../../assets/hero/tamarind.png";
import Button from "../Shared/Button"

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Traditional",
    title: "Beverage",
    title2: "Djamoe",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Traditional",
    title: "Natural",
    title2: "Ingredients",
  },
  {
    id: 1,
    img: Image3,
    subtitle: "Pure Fresh",
    title: "Sour",
    title2: "Tamarinds",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          {/* Hero Section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* content */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left dark:text-white/90 order-2 sm:order-1 relative z-10"> 
                    <h1 
                    data-aos="zoom-out" 
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
                    <h1 
                    data-aos="zoom-out" 
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-5xl lg:text-7xl font-bold">{data.title}</h1>
                    <h1 
                    data-aos="zoom-out" 
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl uppercase text-white dark:text-white/10 sm:text-[80px] md:text-[75px] xl:text-[150px] font-bold">{data.title2}</h1>
                    <div
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    >
                      <a href="/shop">
                      <Button 
                      text="Shop by Category"
                      bgColor="bg-secondary"
                      textColor="text-white" 
                      />
                      </a>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="order-1 sm:order-2">
                    <div
                    data-aos="zoom-in"
                    data-aos-one="true"
                    className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] sm:w-[440px] h-[300px] sm:h-[450px]  sm:scale-100 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
