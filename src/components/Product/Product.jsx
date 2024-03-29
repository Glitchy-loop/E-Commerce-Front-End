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
  isProductView,
}) => {
  const handleStock = (item) => {
    if (!item) {
      return <span style={{ color: "red" }}>Out of stock.</span>
    } else {
      return <span>In stock: {item}.</span>
    }
  }

  return (
    <S.Product>
      {img && <S.Img src={img} alt={title} />}
      <S.Title>{title}</S.Title>
      {price && (
        <S.Price>
          {isProductView && <span>Price: </span>}€{price}
        </S.Price>
      )}
      {description && (
        <S.Description>
          <span>Description:</span> {description}
        </S.Description>
      )}
      {category && (
        <S.Category>
          <span>Category: </span>
          {category}
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
