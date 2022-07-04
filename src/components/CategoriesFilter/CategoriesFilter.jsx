import React from "react"
import PropTypes from "prop-types"
import * as S from "./CategoriesFilter.styles"

const CategoriesFilter = ({ categories, handleClick, showAll }) => {
  return (
    <>
      <S.Categories>
        {categories.map((category, index) => (
          <S.Category
            key={index}
            onClick={(e) => handleClick(e.target.textContent.trim())}
          >
            {category}
          </S.Category>
        ))}
      </S.Categories>
      <S.Showall onClick={showAll}>Show all</S.Showall>
    </>
  )
}

CategoriesFilter.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default CategoriesFilter
