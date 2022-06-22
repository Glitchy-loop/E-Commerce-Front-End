import React from "react"
import PropTypes from "prop-types"
import * as S from "./Product.styles"

const Product = ({ img, category, title, price, description }) => {
  return (
    <S.Product>
      <S.Img
        src={process.env.REACT_APP_BACKEND_URL + "/v1/products/img/" + img}
        alt={title}
      />
      <S.Title>{title}</S.Title>
      <S.Category>{category}</S.Category>
      <S.Price>{price}</S.Price>
      {description && <S.Description>{description}</S.Description>}
    </S.Product>
  )
}

Product.propTypes = {
  img: PropTypes.string.isRequired, // ! ADD REQUIRED
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
}

export default Product
