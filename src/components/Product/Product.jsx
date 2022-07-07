import React from "react"
import PropTypes from "prop-types"
import * as S from "./Product.styles"
import Button from "../Button/Button"

const Product = ({
  img,
  category,
  title,
  price,
  description,
  addToCart,
  inStock,
  showStock,
}) => {
  const handleStock = (item) => {
    if (!item) {
      return (
        <span style={{ ontStyle: "italic", color: "red" }}>Out of stock.</span>
      )
    } else {
      return (
        <div>
          <span style={{ fontStyle: "italic" }}>In stock: </span>
          {item}
        </div>
      )
    }
  }

  return (
    <S.Product>
      {img && (
        <S.Img
          src={`${process.env.REACT_APP_S3_BUCKET_URL}/${img}`}
          alt={title}
        />
      )}
      <S.Title>{title}</S.Title>
      {price && (
        <S.Price>
          <span>Price: </span>
          {price}
        </S.Price>
      )}
      {description && (
        <S.Description>
          <span>Description: </span>
          {description}
        </S.Description>
      )}
      {category && (
        <S.Category>
          <span>Category: </span> {category}
        </S.Category>
      )}
      {showStock && <S.InStock>{handleStock(inStock)}</S.InStock>}
      {inStock !== 0 && addToCart && (
        <Button handleClick={addToCart}>Add to cart</Button>
      )}
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
