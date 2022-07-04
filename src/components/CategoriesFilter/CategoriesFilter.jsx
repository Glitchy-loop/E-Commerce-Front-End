import React from "react"
import PropTypes from "prop-types"
import * as S from "./CategoriesFilter.styles"

const CategoriesFilter = ({ categories }) => {
  return (
    <S.Categories>
      {categories.map((category, index) => (
        <S.Category key={index}>{category}</S.Category>
      ))}
    </S.Categories>
  )
}

CategoriesFilter.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default CategoriesFilter
