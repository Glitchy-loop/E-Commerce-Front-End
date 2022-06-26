import React from "react"
import PropTypes from "prop-types"
import * as S from "./ViewProductsList.styles"
import { faX } from "@fortawesome/free-solid-svg-icons"
import Button from "../Button/Button"

const ViewProductsList = ({ products, handleDelete }) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Title</th>
          <th>Product Category</th>
          <th>Product Price</th>
          <th>Product description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <>
            <tr>
              <S.Td>{product.id}</S.Td>
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
  )
}

ViewProductsList.propTypes = {}

export default ViewProductsList
