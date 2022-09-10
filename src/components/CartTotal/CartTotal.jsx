import React from "react"
import store from "../../redux/store"
import * as S from "./CartTotal.styles"

const CartTotal = () => {
  return (
    <S.CartTotal>
      <S.CartTotalText>Cart total:</S.CartTotalText>
      <S.CartTotalAmount>
        €{store.getState().cart.value.Cart_total}
      </S.CartTotalAmount>
    </S.CartTotal>
  )
}

export default CartTotal
