import React from 'react'

const ProductPageComponent = () => {


    const [productData, setProductData] = useState({})
  const param = useParams()

  useEffect(() => {
    getProductData()
  },[])

  const getProductData = async() => {
    const response = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/Laptop/product/${param}`)
    setProductData(response.data)
    
  }


  return (
    <React.Fragment>
        <div className='flex flex-col justify-center items-center'>
            <img src='https://imgeng.jagran.com/images/2023/mar/best%20laptops1679305053832.jpg' className='h-1/2 w-1/2 rounded-lg'/>
            <div className='flex flex-col justify-center items-center w-1/3'>
                <h1 className='text-2xl font-semibold '>{productData.productName}</h1>
                <div className='flex justify-between w-full'>
                    <p className='text-xl font-semibold text-gray-500'>Price: <span className='text-black'>${productData.price}</span></p>
                    <p className='flex items-center text-lg gap-2'>Rating: <span className='text-black'>{product.rating}  </span><FaStar  className='bg-green-500 text-white px-1 py-0.5 text-3xl rounded-sm'/></p>
                </div>
                <div className='flex justify-between w-full'>
                    <p className='text-xl font-semibold text-gray-500'>Discount: <span className='text-black'>{productData.discount}</span></p>
                    <p className='text-xl font-semibold text-gray-500'>Availability: <span className='text-black'>Availability: {productData.availability}</span></p>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ProductPageComponent