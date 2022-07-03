import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Cart/cartSlice'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  cart: cartReducer
})

export default configureStore({
  reducer: rootReducer
})
