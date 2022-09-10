import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'addToCart',
  initialState: {
    value: { Cart_total: 0, products: {} }
  },
  reducers: {
    addProductToCart: (state, action) => {
      if (state.value.products[action.payload.id]) {
        // Jeigu produktas pagal turintis id 'payload.id' egzistuoja globaliam store
        // tada pridedam prie produkto count +1

        state.value.products[action.payload.id].count += 1
      } else {
        // Jeigu produktas pagal id neegzistuoja, sukuriam nauja produkto objekta su count 1
        state.value.products[action.payload.id] = {
          count: 1,
          product: action.payload
        }
      }
      state.value.Cart_total += action.payload.price
    },
    removeProductFromCart: (state, action) => {
      state.value.Cart_total -=
        action.payload.price * state.value.products[action.payload.id].count
      delete state.value.products[action.payload.id]
    },
    reset: (state, action) => {
      state.value = { Cart_total: 0, products: {} }
    }
  }
})

export const { addProductToCart } = cartSlice.actions
export const { removeProductFromCart } = cartSlice.actions
export const { reset } = cartSlice.actions
export const cartValue = state => state.addToCart

export default cartSlice.reducer
