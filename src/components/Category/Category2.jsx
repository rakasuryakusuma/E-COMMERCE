import React from "react";
import Image1 from "../../assets/category/kunyitasam.png";
import Image2 from "../../assets/category/drink.png";
import Image3 from "../../assets/category/cold.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div data-aos="fade-up" data-aos-duration="900" className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 1st cols */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-orange-400/90 to-orange-100/50 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="space-y-2 mb-4">
                <p className="mb-[2px] text-white">Deliver</p>
                <p className="text-2xl font-semibold ">The Flavour</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 ">
                  Traditional Combination
                </p>
                <a href="/shop">
                <Button
                  text="Buy Now"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                /></a>
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[320px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* 2nd cols */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/50 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-offset="0"
                  className="mb-[2px] text-white"
                >
                  Enjoy
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-offset="0"
                  className="text-2xl font-semibold mb-[2px]"
                >
                  With
                </p>
                <p className="text-4xl xl:text-5xl font-bold opacity-30 mb-2">
                  Healthy
                </p>
                <a href="/shop">
                <Button
                  text="Buy Now"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                /></a>
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              data-aos="zoom-in"
              data-aos-delay="500"
              className="w-[300px] absolute bottom-0 right-0"
            />
          </div>
          {/* 3rd cols */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/50 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-offset="0"
                  className="mb-[2px] text-white"
                >
                  Enjoy
                </p>
                <p
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-offset="0"
                  className="text-2xl font-semibold mb-[2px]"
                >
                  With
                </p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  HOT / COLD
                </p>
                <a href="/shop">
                <Button
                  text="Buy Now"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                /></a>
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              data-aos="zoom-in"
              data-aos-delay="500"
              className="w-[200px] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
