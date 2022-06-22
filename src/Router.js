import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navigation from './components/Navigation/Navigation'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Shop from './Pages/Shop'

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
