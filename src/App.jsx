import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePageComponent from './Components/HomePageComponent/HomePageComponent'
import ProductPageComponent from './Components/ProductPageComponent/ProductPageComponent'
import NavbarComponent from './Components/NavbarComponent/NavbarComponent'

const App = () => {
  return (
    // <h1 className='text-3xl font-bold underline'>Oh dear!</h1>
    <React.Fragment>

      <NavbarComponent/>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePageComponent/>} path='/'/>
          <Route element={<ProductPageComponent/>} path='/:productName'/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App