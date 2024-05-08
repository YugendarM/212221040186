import React from 'react'

const ProductPageComponent = () => {

  return (
    <React.Fragment>
        <div className='flex flex-col justify-center items-center'>
            <img src='https://imgeng.jagran.com/images/2023/mar/best%20laptops1679305053832.jpg' className='h-1/2 w-1/2 rounded-lg'/>
            <div className='flex flex-col justify-center items-center w-1/3'>
                <h1 className='text-2xl font-semibold '>Laptop - 4</h1>
                <div className='flex justify-between w-full'>
                    <p className='text-xl font-semibold text-gray-500'>Price: <span className='text-black'>$850</span></p>
                    <p className='text-xl font-semibold text-gray-500'>Ratings: <span className='text-black'>4.12</span></p>
                </div>
                <div className='flex justify-between w-full'>
                    <p className='text-xl font-semibold text-gray-500'>Discount: <span className='text-black'>1850</span></p>
                    <p className='text-xl font-semibold text-gray-500'>Availability: <span className='text-black'>Out of stock</span></p>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ProductPageComponent