import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePageComponent from './Components/HomePageComponent/HomePageComponent'
import ProductPageComponent from './Components/ProductPageComponent/ProductPageComponent'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePageComponent/>} path='/'/>
          <Route element={<ProductPageComponent/>} path='/'/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App