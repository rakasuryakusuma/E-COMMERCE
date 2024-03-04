import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../../assets/website/DJAMOE.png";

import Img1 from "../../assets/about/left.jpg";
import Img2 from "../../assets/about/mid.jpg";
import Img3 from "../../assets/about/mid2.jpg";
import Img4 from "../../assets/about/right.jpg";

const About = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
  }, []);

  const data2 = {
    year: "Since 1922",
    title: "Herbal Drink",
    desc: "Where Tradition meet Modernity",
    image: logo,
    title2: "Traditional Heritage",
    title3: "DJAMOE",
    title4:
      "Djamoe is a distinctive brand that encapsulates the essence of Indonesian heritage and wellness. Renowned for its authentic and thoughtfully crafted herbal products. Djamoe harmonizes traditional wisdom with modern lifestyle",
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <div className="min-h-[550px] flex justify-center items-center py-12">
        <div className="container pb-8 rounded-3xl bg-gradient-to-br from-green-800 to-blue-300/70 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-600/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
            <div className="p-6 sm:p-8">
              <p data-aos="slide-right" className="text-sm font-semibold">
                {data2.year}
              </p>
              <h1
                data-aos="fade-down"
                className="uppercase text-5xl lg:text-8xl font-bold"
              >
                {data2.title}
              </h1>
              <p data-aos="fade-up" className="text-xl">
                {data2.desc}
              </p>
            </div>
            {/* 2nd column */}
            <div data-aos="zoom-in" className="h-full flex items-center">
              <img
                src={data2.image}
                alt=""
                className="scale-150 w-[400px] md:w-[350px] mx-auto object-cover"
              />
            </div>
            {/* 3rd column */}
            <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
              <p data-aos="slide-left" className="font-bold text-xl">
                {data2.title2}
              </p>
              <p data-aos="fade-up" className="text-8xl font-bold">
                {data2.title3}
              </p>
              <p data-aos="fade-down" className="text-sm">
                {data2.title4}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 data-aos="fade-down" className="font-bold text-5xl text-center">
          Discover the Essence of Wellness with Djamoe
        </h1>
        <article data-aos="fade-up" className="mt-5 text-2xl">
          Welcome to <b>Djamoe</b> a brand that transcends boundaries to brings
          you the rich tapestry of Indonesia heritage and holistic wellness. At
          Djamoe, we believe in the profound healing power of nature and the
          age-old wisdom embedded in traditional Indonesian remedies. Our brand
          is a testament to the vibrant and diverse culture of Indonesia,
          offering a unique blend of herbal products designed to elevate your
          well-being.
        </article>
        <article data-aos="fade-up" className="mt-5 text-2xl mb-10">
          <b>Djamoe</b> draws inspiration from the traditional Jamu, a
          time-honored herbal conoction cherised for its therapeutic properties.
          We pay homage to this ancient practice by infusing modern lifestyle
          needs with the wisdom of generation past. Our roots run deep in the
          cultural heritage of Indonesia, and each Djamoe products reflects the
          commitment to preserving and promoting the natural treasure of this
          beautiful achipelago.
        </article>
        <h1 data-aos='fade-down' className="font-bold text-2xl text-center">Vision</h1>
        <article data-aos="fade-up" className="mt-5 text-2xl mb-10">
          Our Vision is to inspire a journey towards wellness and connection
          with nature. Djamoe strives to be a guilding light in the world of
          holistic living, empowering individuals to embrace the benefits of
          herbal remedies while appreciating the cultural richness from which
          they spring. We envision a world where the healing power of nature is
          celebrated and integrated into daily live.
        </article>
        <h1 data-aos='fade-down' className="font-bold text-2xl text-center">
          Join Us on the Djamoe Journey
        </h1>
        <article data-aos="fade-up" className="mt-5 text-2xl mb-10">
          Whether you are a seasoned enthusiast of herbal or just beginning your
          exploration, Djamoe welcomes you to embark on this enriching journey
          with us. Discover the transformative properties of our products, each
          carrying a plece of Indonesia's natural beauty and cultural heritage.
        </article>
      </div>
      <div className="mb-10">
        <div 
        className="container">
          <div className="flex align-items-center gap-3">
            <img data-aos='fade-up' src={Img1} alt="" className="rounded-md h-[350px] " />
            <img data-aos='fade-up' data-aos-delay='400' src={Img2} alt="" className="rounded-md h-[350px]" />
            <img data-aos='fade-up' data-aos-delay='600' src={Img3} alt="" className="rounded-md h-[350px]" />
            <img data-aos='fade-up' data-aos-delay='800' src={Img4} alt="" className="rounded-md h-[350px]" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
