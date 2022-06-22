import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Navigation from './components/Navigation/Navigation'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Shop from './Pages/Shop'
import Dashboard from './Pages/Dashboard'
import ProductDetails from './Pages/ProductDetails'

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route
          exact
          path='/dashboard'
          element={
            localStorage.getItem('token') ? (
              <Dashboard />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
        <Route exact path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
