import React from "react"
import PropTypes from "prop-types"
import * as S from "./CartView.styles"

const CartView = ({ products }) => {
  return (
    <S.CartView>
      {products.map((product) => (
        <>
          <S.Item>
            <img
              src={
                process.env.REACT_APP_BACKEND_URL +
                "/v1/products/img/" +
                product.img
              }
            />
            <div>{product.title}</div>
            <div>€{product.price}</div>
          </S.Item>
        </>
      ))}
    </S.CartView>
  )
}

CartView.propTypes = {}

export default CartView
