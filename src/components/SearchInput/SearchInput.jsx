import React from "react"
import PropTypes from "prop-types"
import * as S from "./SearchInput.styles"

const SearchInput = ({ title, handleSearch }) => {
  return (
    <S.Search>
      <S.Title>{title}</S.Title>
      <S.Input
        type='search'
        placeholder='Search...'
        onChange={(e) => handleSearch(e.target.value)}
      />
    </S.Search>
  )
}

SearchInput.propTypes = {}

export default SearchInput
