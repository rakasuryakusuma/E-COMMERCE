import React from 'react'
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaReact } from 'react-icons/fa6'

const QuickLinks = [
    {
        title: "Trending Products",
        link: "/#trending",
    },
    {
        title: "Best Selling",
        link: "/#best",
    },
    {
        title: "Top Rated",
        link: "/#toprated"
    }
]

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "Shop",
        link: "shop",
    },
    {
        title: "About",
        link: "about",
    },
];


const Footer = () => {
  return (
    <div className='dark:bg-gray-950 bg-gray-100'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/* details */}
            <div className='py-8 px-4'>
                <a href="#"
                className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text=3xl lg:text-5xl'
                >Djamoe</a>
                <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                    Explore our range of products, learn more about our story, and join our community ad we navigate the path to holistic well-being together. <b>Djamoe</b> - where tradition meets modernity.
                </p>
                <p className='text-gray-500 mt-4 flex  items-center '>Made with <FaReact className='ml-1 mr-1 text-blue-500'/> by Raka Surya Kusuma</p>
                <a href="" className='inline-block bg-brandGreen dark:bg-secondary text-white py-2 px-4 mt-4 text-sm rounded-full'>
                    Social Media
                </a>
            </div>
            {/* Links */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='font-bold text-xl sm:text-left mb-4'>Important Links</h1>
                    <ul className='space-y-3'>
                        {
                            FooterLinks.map((data,index) => (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-black duration-300'>
                                        {data.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* 2nd links */}
                <div className='py-8 px-4'>
                    <h1 className='font-bold text-xl sm:text-left mb-4'>Quick Links</h1>
                    <ul className='space-y-3'>
                        {
                            QuickLinks.map((data,index) => (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-black duration-300'>
                                        {data.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Address */}
                <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-4'>Address</h1>
                        <div>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>Semarang, Central Java, Indonesia</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt />
                                <p>+62 882-2530-2649</p>
                            </div>
                            {/* Social */}
                            <div className='flex items-center mt-6 gap-3'>
                                <a href="#">
                                    <FaLinkedin className='text-3xl hover:text-gray-300 duration-200 text-blue-800'/>
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl text-blue-700 hover:text-gray-300 duration-200 '/>
                                </a>
                                <a href="#">
                                    <FaInstagram className='text-3xl hover:text-gray-300 duration-200 text-primary'/>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
