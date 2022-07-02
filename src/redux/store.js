import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import cartReducer from './Cart/cartSlice'

const store = configureStore(
  {
    reducer: {
      cart: cartReducer
    }
  },
  composeWithDevTools
)

export default store
