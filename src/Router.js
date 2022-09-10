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
import About from './Pages/About'
import ThankYou from './Pages/ThankYou'
import Footer from './components/Footer/Footer'
import { Provider } from 'react-redux'
import store from './redux/store'
import CheckOut from './Pages/CheckOut'

const Router = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/product/:id' element={<ProductDetails />} />
          <Route exact path='/dashboard/add' element={<AddProduct />} />
          <Route exact path='/dashboard/orders' element={<Orders />} />
          <Route exact path='/thankyou/:id' element={<ThankYou />} />
          <Route exact path='/checkout' element={<CheckOut />} />
          <Route
            exact
            path='/dashboard/view-products'
            element={<ViewProducts />}
          />
          <Route exact path='*' element={<Home />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default Router
