import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
     <Footer />
    </BrowserRouter>
  )
}

export default App
