import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaCartShopping } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
// import ShopDetails from "./ShopDetails";

import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-6.jpg";
import Img7 from "../../assets/product/p-7.jpg";
import Img8 from "../../assets/product/p-8.jpg";
import { FaBackspace } from "react-icons/fa";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const Shop = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
  }, []);

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {
      img: Img1,
      title: "Beras Kencoer - Djamoe",
      price: "10000",
    },
    {
      img: Img2,
      title: "Green Blend - Djamoe",
      price: "10000",
    },
    {
      img: Img3,
      title: "Tumeric - Djamoe",
      price: "10000",
    },
    {
      img: Img4,
      title: "Ginger - Travel Pack",
      price: "10000",
    },
    {
      img: Img5,
      title: "Tamarind - Djamoe",
      price: "10000",
    },
    {
      img: Img6,
      title: "Sweet Sour Blend - Djamoe",
      price: "10000",
    },
    {
      img: Img7,
      title: "Koenyit Asam - Djamoe",
      price: "10000",
    },
    {
      img: Img8,
      title: "Traditional Green - Djamoe",
      price: "10000",
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log('cart saved')

    const newTotalPrice = cart.reduce(
      (sum, product) => sum + parseFloat(product.price),
      0
    );
    setTotalPrice(newTotalPrice);
  });

  const addToCart = (product) => {
    // console.log("we are in addToCart");
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    // filter function
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      <div className="mb-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center products">
          {products.map((product, id) => (
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group product"
              key={id}
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt=""
                  className="h-[260px] w-[340px] object-cover rounded-md m-10"
                />
                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-[200px] -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                  <button
                    onClick={() => {
                    addToCart(product)  
                    }}
                    className="cursor-pointer py-2 px-8 rounded-full relative z-10 bg-brandGreen"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="leading-7">
                <h2 className="font-semibold text-center flex ml-10">
                  {product.title}
                </h2>
                <h2 className="font-bold flex ml-10">Rp {product.price}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <div className="mb-10 products">
        <h1 className="font-bold text-center text-5xl">Your Cart</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center ">
          {cart.map((product, idx) => (
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group product"
              key={idx}
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt=""
                  className="h-[260px] w-[340px] object-cover rounded-md m-10"
                />
                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-[200px] -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                  <button
                    onClick={() => removeFromCart(product)}
                    className="cursor-pointer py-2 px-8 rounded-full relative z-10 bg-brandGreen"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="leading-7">
                <h2 className="font-semibold text-center flex ml-10">
                  {product.title}
                </h2>
                <h2 className="font-bold flex ml-10">Rp {product.price}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="total container text-2xl mt-4">
          {cart.length > 0 && (
            <span className="text-bold bg-brandGreen rounded-md p-2">
              Total Price: Rp {totalPrice},00{" "}
            </span>
          )}
          <span className="text-bold bg-brandGreen rounded-md p-2 ml-9 cursor-pointer">
            Checkout
          </span>
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <div className="container">
        <header className="flex w-full">
          <button
            onClick={() => navigateTo(PAGE_CART)}
            className="ml-[85px] bg-brandGreen rounded-md p-2 text-semibold text-xl flex text-white dark:bg-secondary"
          >
            <FaCartShopping className="text-xl text-white mr-3 mt-1" />
            Cart Items: {cart.length}
          </button>
          <button
            onClick={() => navigateTo(PAGE_PRODUCTS)}
            className="ml-[1100px] bg-brandGreen rounded-md p-2 text-semibold text-xl flex text-white dark:bg-secondary"
          >
            <FaBackspace className="text-xl text-white mr-3 mt-1" />
            Back
          </button>
        </header>
        {page === PAGE_PRODUCTS && renderProducts()}
        {page === PAGE_CART && renderCart()}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
