import React, { useEffect, useState } from 'react'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'

const HomePageComponent = () => {

    const [productSearchQuery, setProductSearchQuery] = useState("")

    const [productsData, setProductsData] = useState([
        {
            productName: "Laptop",
            price: "9102",
            rating: "234",
            discount: "98",
            availability: "out-of-stock"
        },

        {
            productName: "Laptop",
            price: "9102",
            rating: "234",
            discount: "98",
            availability: "out-of-stock"
        },
        {
            productName: "Laptop",
            price: "9102",
            rating: "234",
            discount: "98",
            availability: "out-of-stock"
        },
        {
            productName: "Laptop",
            price: "9102",
            rating: "234",
            discount: "98",
            availability: "out-of-stock"
        },
        {
            productName: "Laptop",
            price: "9102",
            rating: "234",
            discount: "98",
            availability: "out-of-stock"
        },

        
    ])
  return (
    <React.Fragment>
        <div className='flex flex-col justify-center items-center h-full w-screen gap-10'>
            <h1 className='text-2xl font-semibold'>PRODUCTS PAGE</h1>

            <div>
                <input type='search' placeholder='Enter Product' name='productSearchQuery' className='border bg-gray-50 rounded-full py-2 px-4 w-full focus:ring-0' />
                <div></div>
            </div>            
            <div className='flex items-center gap-5 container px-64'>
            { productsData &&
                productsData.map((product) => (
                    <ProductCardComponent  product={product}/>
                ))
            }
            </div>
        </div>

    </React.Fragment>
  )
}

export default HomePageComponent