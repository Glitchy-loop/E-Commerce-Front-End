import React from "react"
import PropTypes from "prop-types"
import * as S from "./Product.styles"
import Button from "../Button/Button"

const Product = ({ img, category, title, price, description, addToCart }) => {
  return (
    <S.Product>
      {img && (
        <S.Img
          src={process.env.REACT_APP_BACKEND_URL + "/v1/products/img/" + img}
          alt={title}
        />
      )}
      <S.Title>{title}</S.Title>
      <S.Category>{category}</S.Category>
      {price && <S.Price>{price}</S.Price>}
      {description && <S.Description>{description}</S.Description>}
      {addToCart && <Button handleClick={addToCart}>Add to cart</Button>}
    </S.Product>
  )
}

Product.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  addToCart: PropTypes.func,
}

export default Product
