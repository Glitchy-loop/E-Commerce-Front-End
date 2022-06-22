import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Navigation from './components/Navigation/Navigation'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Shop from './Pages/Shop'
import Dashboard from './Pages/Dashboard'

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
      </Routes>
    </BrowserRouter>
  )
}

export default Router
