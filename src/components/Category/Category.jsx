import React from 'react'
import Image1 from "../../assets/category/tumeric.png";
import Image2 from "../../assets/category/beraskencur.png";
import Image3 from "../../assets/hero/tamarind.png";
import Button from "../Shared/Button"

const Category = () => {
  return (
    <div className='py-8'>
        <div
        data-aos='fade-up'
        data-aos-duration='500'
        className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* 1st cols */}
                <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p 
                            data-aos='fade-down'
                            data-aos-duration='700'
                            data-aos-offset='0'
                            className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p 
                            data-aos='fade-down'
                            data-aos-duration='700'
                            data-aos-offset='0'
                            className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p
                            className='text-4xl xl:text-5xl font-bold opacity-20 mb-3'>Tumeric</p>
                            <a href="/shop">
                            <Button 
                            text="Buy Now"
                            bgColor={"bg-secondary"}
                            textColor={"text-white"}
                            />
                            </a>
                        </div>
                    </div>
                    <img src={Image1} alt=""
                    data-aos='zoom-in'
                    data-aos-delay='700'
                    className='w-[200px] absolute right-0 md:top-5 md:right-0 lg:bottom-0  xl:top-[1px] '/>
                </div>
                {/* 2nd cols */}
                <div className='py-10 pl-5 bg-gradient-to-br from-green-500/90 to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p 
                            data-aos='fade-down'
                            data-aos-duration='700'
                            data-aos-offset='0'
                            className='mb-[2px] text-white'>Enjoy</p>
                            <p 
                            data-aos='fade-up'
                            data-aos-duration='700'
                            data-aos-offset='0'
                            className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p 
                            className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Kencoer</p>
                            <a href="/shop">
                            <Button 
                            text="Buy Now"
                            bgColor={"bg-white"}
                            textColor={"text-brandGreen"}
                            />
                            </a>
                        </div>
                    </div>
                    <img src={Image2} alt="" 
                    data-aos='zoom-in'
                    data-aos-delay='700'
                    className='w-[250px] absolute right-0 md:top-5 md:right-0 lg:bottom-0 xl:top-[1px]'/>
                </div>
                {/* 3rd cols */}
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/50 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='space-y-2 mb-4'>
                            <p
                            data-aos='fade-down'
                            data-aos-duration='700'
                            data-aos-offset='0'
                            className='mb-[2px] text-white'>Enjoy</p>
                            <p 
                            data-aos='fade-down'
                            data-aos-duration='700'
                            data-aos-offset='0'
                            className='text-2xl font-semibold '>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 '>Tamarind</p>
                            <a href="/shop">
                            <Button 
                            text="Buy Now"
                            bgColor={"bg-white"}
                            textColor={"text-secondary"}
                            />
                            </a>
                        </div>
                    </div>
                    <img src={Image3} alt="" 
                    className='w-[320px] absolute top-1/2 -translate-y-1/2 -right-0'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category
