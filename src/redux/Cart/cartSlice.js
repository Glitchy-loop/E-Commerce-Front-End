import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'addToCart',
  initialState: {
    value: {}
  },
  reducers: {
    addProductToCart: (state, action) => {
      if (state.value[action.payload.id]) {
        state.value[action.payload.id]['count'] += 1
      } else {
        state.value[action.payload.id] = {
          count: 1,
          product: action.payload
        }
      }
    },
    removeProductFromCart: (state, action) => {
      delete state.value[action.payload.id]
    }
  }
})

export const { addProductToCart } = cartSlice.actions
export const { removeProductFromCart } = cartSlice.actions
export const cartValue = state => state.addToCart

export default cartSlice.reducer
