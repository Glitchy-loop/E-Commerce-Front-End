import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navigation from './components/Navigation/Navigation'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Shop from './Pages/Shop'
import Dashboard from './Pages/Dashboard'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import AddProduct from './Pages/AddProduct'
import Orders from './Pages/Orders'
import ViewProducts from './Pages/ViewProducts'
import Contacts from './Pages/Contacts'
import Footer from './components/Footer/Footer'

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/contacts' element={<Contacts />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/product/:id' element={<ProductDetails />} />
        <Route exact path='/dashboard/add' element={<AddProduct />} />
        <Route exact path='/dashboard/orders' element={<Orders />} />
        <Route
          exact
          path='/dashboard/view-products'
          element={<ViewProducts />}
        />
        <Route exact path='*' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
