import React from "react"
import PropTypes from "prop-types"
import * as S from "./ProductList.styles"
import Product from "../Product/Product"

const ProductList = ({ products }) => {
  return (
    <S.ProductList>
      {products &&
        products.map((product) => (
          <S.StyledLink to={`/product/${product.id}`}>
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
      img: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      description: PropTypes.string,
    }).isRequired
  ),
}

export default ProductList
