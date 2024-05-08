import React, { useEffect, useState } from 'react'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
import axios from 'axios'
import { FaSearch } from "react-icons/fa";


const HomePageComponent = () => {
    const [accessToken, setAccessToken] = useState("")
    const [productSearchQuery, setProductSearchQuery] = useState("")
    const [productsData, setProductsData] = useState([
        {
            "productName": "Laptop-1",
            "price": 1345,
            "discount": 98,
            "rating": 4.7,
            "availability": "out-of-stock"
        },
        {
            "productName": "Laptop-2",
            "price": 1299,
            "discount": 95,
            "rating": 4.6,
            "availability": "yes"
        },
        {
            "productName": "Laptop-3",
            "price": 1380,
            "discount": 92,
            "rating": 4.8,
            "availability": "out-of-stock"
        },
        {
            "productName": "Laptop-4",
            "price": 1355,
            "discount": 97,
            "rating": 4.7,
            "availability": "yes"
        },
        {
            "productName": "Laptop-5",
            "price": 1399,
            "discount": 94,
            "rating": 4.5,
            "availability": "out-of-stock"
        },
        {
            "productName": "Laptop-6",
            "price": 1325,
            "discount": 96,
            "rating": 4.7,
            "availability": "yes"
        },
        {
            "productName": "Laptop-7",
            "price": 1368,
            "discount": 90,
            "rating": 4.6,
            "availability": "out-of-stock"
        },
        {
            "productName": "Laptop-8",
            "price": 1375,
            "discount": 93,
            "rating": 4.7,
            "availability": "yes"
        },
        {
            "productName": "Laptop-9",
            "price": 1305,
            "discount": 96,
            "rating": 4.8,
            "availability": "out-of-stock"
        },
        {
            "productName": "Laptop-10",
            "price": 1290,
            "discount": 97,
            "rating": 4.6,
            "availability": "yes"
        }
    ]
    )


    // useEffect(() => {
    //    const fetchData = async() => {
    //     getAccessToken()
    //     getProductsData()
    //    }

    //    fetchData()
    // },[])

    const getAccessToken = async() => {
        const response = await axios.post("http://20.244.56.144/test/auth", 
            {
                "companyName": "Affordmed",
                "clientId": "37bb493c-73d3-47ea-8675-21f66ef9b735",
                "clientSecret": "XOyolORPasKWODAN",
                "ownerEmail": "yugendar2411@gmail.com",
                "rollNo": "212221040186"
            }
        )
    }

    const getProductsData = async() => {
        const response = await axios.get("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPri ce=1&maxPrice=10000")
        setProductsData(response.data)
    }


  return (
    <React.Fragment>
        <div className='flex flex-col  justify-center items-center h-full w-screen gap-10 py-20'>
            <h1 className='text-2xl font-semibold'>PRODUCTS PAGE</h1>

            <div className='border bg-gray-50 rounded-full py-2 px-4 w-64  flex items-center justify-between'>
                <input className='focus:outline-none' onChange={(event) => {setProductSearchQuery(event.target.value)}} type='search' placeholder='Enter Product' name='productSearchQuery'  />
                <div><FaSearch /></div>
            </div>            
            <div className='flex flex-wrap items-center gap-5 container px-64'>
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