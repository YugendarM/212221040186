import React from 'react'
import { Link } from 'react-router-dom'

const ProductCardComponent = ({product}) => {
  return (
    <React.Fragment>
        <Link to={`/${product.productName}`} className='bg-gray-100 flex flex-col gap-2  w-1/2 justify-center items-start px-3 py-4 rounded-lg'>
            <img src='https://imgeng.jagran.com/images/2023/mar/best%20laptops1679305053832.jpg'/>
            <div className='flex flex-col justify-start'>
                <h2 className='text-2xl font-semibold '>{product.productName}</h2>
                <p>${product.price} </p>
                <p>{product.rating}</p>
                <p>{product.discount}% discount</p>
                <p>{product.availability}</p>
            </div>
        </Link>
    </React.Fragment>
  )
}

export default ProductCardComponent