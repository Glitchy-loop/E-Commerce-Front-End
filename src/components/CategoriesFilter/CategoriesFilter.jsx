import React from "react"
import PropTypes from "prop-types"
import * as S from "./CategoriesFilter.styles"
import { useState } from "react"

const CategoriesFilter = ({ categories, handleClick, showAll }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  return (
    <>
      <S.FilterButton onClick={() => setIsFilterOpen((x) => !x)}>
        Filter by category
      </S.FilterButton>
      <S.Categories isFilterOpen={isFilterOpen}>
        <S.CategoryList>
          {categories.map((category, index) => (
            <S.Category
              key={index}
              onClick={(e) => handleClick(e.target.textContent.trim())}
            >
              {category}
            </S.Category>
          ))}
        </S.CategoryList>
        <S.Showall onClick={showAll}>Show all</S.Showall>
      </S.Categories>
    </>
  )
}

CategoriesFilter.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default CategoriesFilter
