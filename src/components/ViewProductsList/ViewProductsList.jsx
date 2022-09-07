import React from "react"
import PropTypes from "prop-types"
import * as S from "./ViewProductsList.styles"
import { faX } from "@fortawesome/free-solid-svg-icons"
import Button from "../Button/Button"
import { Link } from "react-router-dom"

const ViewProductsList = ({ products, handleDelete, isCart }) => {
  return (
    <S.Content>
      <S.Table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Image</th>
            <th>Product Title</th>
            {!isCart && <th>Product Category</th>}
            <th>Product Price</th>
            {!isCart && <th>Product Description</th>}
            {isCart && <th>Quantity</th>}
            {!isCart && <th>In Stock:</th>}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((productsInfo) => {
            let convertedProduct = isCart ? productsInfo.product : productsInfo
            return (
              <tr key={convertedProduct.id}>
                <S.Td>{convertedProduct.id}</S.Td>
                <S.Td>
                  {isCart && (
                    <Link to={`/product/${productsInfo.product.id}`}>
                      <S.Img
                        src={convertedProduct.img}
                        alt={convertedProduct.title}
                      />
                    </Link>
                  )}
                  {!isCart && (
                    <S.Img
                      src={convertedProduct.img}
                      alt={convertedProduct.title}
                    />
                  )}
                </S.Td>
                <S.Td>{convertedProduct.title}</S.Td>
                {!isCart && <S.Td>{convertedProduct.category}</S.Td>}
                <S.Td>{convertedProduct.price}</S.Td>
                {!isCart && convertedProduct.description && (
                  <S.Td>{convertedProduct.description}</S.Td>
                )}
                {isCart && <S.Td>{productsInfo.count}</S.Td>}
                {!isCart && <S.Td>{productsInfo.inStock}</S.Td>}
                <S.Td>
                  <Button
                    handleClick={() => handleDelete(convertedProduct)}
                    icon={faX}
                  ></Button>
                </S.Td>
              </tr>
            )
          })}
        </tbody>
      </S.Table>
    </S.Content>
  )
}

ViewProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
    }).isRequired
  ),
}

export default ViewProductsList
