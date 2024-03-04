import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div 
        style={{ backgroundColor: data.bgColor }} className="container pb-8 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
          {/* 1st column */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" 
            className="text-sm">{data.discount}</p>
            <h1 data-aos="zoom-out" 
            className="uppercase text-4xl lg:text-8xl font-bold ">
              {" "}
              {data.title}
            </h1>
            <p data-aos="fade-up"
            className="text-sm">{data.date}</p>
          </div>
          {/* 2nd column */}
          <div data-aos='zoom-in' className="h-full flex items-center">
            <img src={data.image} alt="" className="scale-150 w-[350px] md:w-[340px] mx-auto drop-shadow-2xl object-cover"/>
          </div>
          {/* 3rd column */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos='zoom-out' className="font-bold text-xl">{data.title2}</p>
            <p data-aos='fade-up' className="text-3xl md:text-3xl sm:text-5xl lg:text-6xl font-bold">{data.title3}</p>
            <p data-aos='fade-up' className="text-sm tracking-wide leading-5">{data.title4}</p>
            <div data-aos='fade-up' data-aos-offset='0'>
              <a href="/shop">
          <button style={{color:data.bgColor}} className="bg-white text-primary py-2 px-4 mt-5 rounded-full">
            Shop Now!</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
