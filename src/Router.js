import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navigation from './components/Navigation/Navigation'
import Register from './Pages/Register'

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
