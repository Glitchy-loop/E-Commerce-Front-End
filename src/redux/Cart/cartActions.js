import * as actionTypes from './cartTypes'

export const addToBasket = itemID => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID
    }
  }
}

export const removeFromBasket = itemID => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID
    }
  }
}
