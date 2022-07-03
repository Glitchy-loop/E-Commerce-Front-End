import React from "react"
import PropTypes from "prop-types"
import * as S from "./CartView.styles"

const CartView = ({ products }) => {
  return (
    <S.CartView>
      {products.map((product) => (
        <div key={product.id}>
          <S.Item>
            <img
              src={
                process.env.REACT_APP_BACKEND_URL +
                "/v1/products/img/" +
                product.img
              }
              alt={product.title}
            />
            <S.Title>{product.title}</S.Title>
            <S.Title>
              Quantity <input type='number' />
            </S.Title>
            <S.Price>€{product.price}</S.Price>
          </S.Item>
        </div>
      ))}
    </S.CartView>
  )
}

CartView.propTypes = {}

export default CartView
