import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import laptop from "../../assets/images/laptops.jpg"
import axios from 'axios';


const ProductCardComponent = ({product}) => {

  
  return (
    <React.Fragment>
        <Link to={`/${product.productName}`} className='bg-gray-100 flex flex-col gap-2  w-80 justify-center items-start px-3 py-4 rounded-lg'>
            <img src={laptop}/>
            <div className='flex flex-col justify-start w-full'>
                <h2 className='text-2xl font-semibold '>{product.productName}</h2>
                <div className='flex justify-between w-full'>
                  <p className='text-lg'>${product.price} </p>
                  <p className='flex items-center text-lg gap-2'>{product.rating}  <FaStar  className='bg-green-500 text-white px-1 py-0.5 text-3xl rounded-sm'/></p>
                </div>
                <p className='text-gray-800'>{product.discount}% discount</p>
                {product.availability === "yes" ? <p className='text-gray-600'>Available</p> : <p className='text-gray-600'>Out of Stock</p>}
            </div>
        </Link>
    </React.Fragment>
  )
}

export default ProductCardComponent