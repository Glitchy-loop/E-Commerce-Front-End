import * as actionTypes from './cartTypes'

const INITIAL_STATE = []

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const inCart = state.cart.find(item =>
        item.id === action.payload.id ? true : false
      )
      return {}
    case actionTypes.REMOVE_FROM_CART:
      return {}
    default:
      return state
  }
}

export default cartReducer
