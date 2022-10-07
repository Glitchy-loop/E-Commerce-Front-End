import React from "react"
import PropTypes from "prop-types"
import * as S from "./ProductDetailsView.styles"
import Button from "../Button/Button"

const ProductDetailsView = ({
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
    <S.ProductDetailsView>
      <S.ProductDetailsLeft>
        <S.Img src={img} alt={title} />
      </S.ProductDetailsLeft>
      <S.ProductDetailsRight>
        <S.Title>{title}</S.Title>
        <S.Hr />
        <S.Category>{category}</S.Category>
        <S.Description>{description}</S.Description>
        <S.Price>€{price}</S.Price>
        {showStock && <S.InStock>{handleStock(inStock)}</S.InStock>}
        {inStock !== 0 && addToCart && (
          <S.ButtonDiv>
            <Button handleClick={addToCart}>Add to cart</Button>
          </S.ButtonDiv>
        )}
      </S.ProductDetailsRight>
    </S.ProductDetailsView>
  )
}

ProductDetailsView.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  addToCart: PropTypes.func,
}

export default ProductDetailsView
