import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import kunyitasam from "./assets/hero/tamarind.png";
import ginger from "./assets/hero/ginger.png";

const BannerData = {
  discount: "30% OFF",
  title: "Trend Product",
  date: "1 March to 25 April",
  image: kunyitasam,
  title2: "Djamoe Tamarind",
  title3: "Trending Sale",
  title4:
    "Tamarind Jamu is a delightful and invigorating traditional Indonesian beverage that seamlessly blends the bold flavors of tamarind with an array of aromatic spices. This exquisite concoction is not only a treat for the taste buds but also boasts numerous health benefits. The rich, tangy notes of tamarind are complemented by the warmth of ginger, the earthiness of turmeric, and a touch of sweetness from palm sugar. ",
  bgColor: "#1376f4",
};
const BannerData2 = {
  discount: "50% OFF",
  title: "Best Selling",
  date: "1 March to 31 March",
  image: ginger,
  title2: "Djamoe Ginger",
  title3: "Flash Sale",
  title4:
    "Ginger Jamu, a cherished Indonesian elixir, captivates the senses with its bold and invigorating profile. Crafted from the piquant warmth of fresh ginger, this traditional beverage embodies a harmonious fusion of natural flavors and healthful properties. The robust, spicy notes of ginger are expertly balanced with hints of turmeric, lemongrass, and a touch of tamarind, creating a well-rounded and aromatic concoction. ",
  bgColor: "#2dcc6f",
};


const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
  }, []);

  return (
    // <DataProvider>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        {/* <Router> */}
          <Navbar />
          <Hero />
          <Category />
          <Category2 />
          <Services />
          <Banner data={BannerData} />
          <Product />
          <Banner data={BannerData2} />
          <Footer />
        {/* </Router> */}
      </div>
    // </DataProvider>
  );
};

export default App;
