import React from "react"
import PropTypes from "prop-types"
import * as S from "./ViewProductsList.styles"
import { faX } from "@fortawesome/free-solid-svg-icons"
import Button from "../Button/Button"

const ViewProductsList = ({ products, handleDelete }) => {
  return (
    <S.Content>
      <S.Table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Image</th>
            <th>Product Title</th>
            <th>Product Category</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <>
              <tr>
                <S.Td>{product.id}</S.Td>
                <S.Td>
                  {
                    <S.Img
                      src={`${process.env.REACT_APP_BACKEND_URL}/v1/products/img/${product.img}`}
                      alt={product.title}
                    />
                  }
                </S.Td>
                <S.Td>{product.title}</S.Td>
                <S.Td>{product.category}</S.Td>
                <S.Td>{product.price}</S.Td>
                <S.Td>{product.description}</S.Td>
                <S.Td>
                  <Button
                    handleClick={() => handleDelete(product.id)}
                    icon={faX}
                  ></Button>
                </S.Td>
              </tr>
            </>
          ))}
        </tbody>
      </S.Table>
    </S.Content>
  )
}

ViewProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ),
}

export default ViewProductsList
