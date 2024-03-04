import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

import Img1 from '../../assets/product/p-1.jpg';
import Img2 from '../../assets/product/p-2.jpg';
import Img3 from '../../assets/product/p-3.jpg';
import Img4 from '../../assets/product/p-4.jpg';
import Img5 from '../../assets/product/p-5.jpg';
import Img6 from '../../assets/product/p-6.jpg';
import Img7 from '../../assets/product/p-7.jpg';
import Img8 from '../../assets/product/p-8.jpg';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Beras Kencoer - Djamoe",
        price: "10000",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Green Blend - Djamoe",
        price: "10000",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Tumeric - Djamoe",
        price: "10000",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Ginger - Travel Pack",
        price: "10000",
        aosDelay: "600",
    },
]
const ProductsData2 = [
    {
        id: 5,
        img: Img5,
        title: "Tamarind - Djamoe",
        price: "10000",
        aosDelay: "0",
    },
    {
        id: 6,
        img: Img6,
        title: "Sweet Sour Blend - Djamoe",
        price: "10000",
        aosDelay: "21000",
    },
    {
        id: 7,
        img: Img7,
        title: "Koenyit Asam - Djamoe",
        price: "10000",
        aosDelay: "400",
    },
    {
        id: 8,
        img: Img8,
        title: "Traditional Green - 100 mL",
        price: "10000",
        aosDelay: "600",
    },
]

const Product = () => {
  return (
    <div>
        <div className="container">
            {/* Header Section */}
            <Heading title="Our Product" subtitle={"Explore Our Product"}/>
            {/* Body Section */}
            <ProductCard data={ProductsData} />
            <ProductCard data={ProductsData2} />
        </div>
    </div>
  )
}

export default Product
