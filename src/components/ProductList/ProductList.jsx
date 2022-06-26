import React from "react"
import PropTypes from "prop-types"
import * as S from "./ProductList.styles"
import Product from "../Product/Product"

const ProductList = ({ products }) => {
  return (
    <S.ProductList>
      {products &&
        products.map((product) => (
          <S.StyledLink key={product.title} to={`/product/${product.id}`}>
            <Product
              key={product.title}
              img={product.img}
              title={product.title}
              price={product.price}
            />
          </S.StyledLink>
        ))}
    </S.ProductList>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
    }).isRequired
  ),
}

export default ProductList
