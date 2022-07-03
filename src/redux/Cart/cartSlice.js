import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'addToCart',
  initialState: {
    value: {}
  },
  reducers: {
    addProductToCart: (state, action) => {
      if (state.value[action.payload]) {
        state.value[action.payload] += 1
      } else {
        state.value[action.payload] = 1
      }
    },
    removeProductFromCart: (state, action) => {
      state.value[action.payload]--
    }
  }
})

export const { addProductToCart } = cartSlice.actions
export const { removeProductFromCart } = cartSlice.actions
export const cartValue = state => state.addToCart

export default cartSlice.reducer
