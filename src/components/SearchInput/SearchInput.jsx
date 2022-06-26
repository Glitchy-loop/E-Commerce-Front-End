import React from "react"
import PropTypes from "prop-types"
import * as S from "./SearchInput.styles"

const SearchInput = ({ title, placeholder, handleSearch }) => {
  return (
    <S.Search>
      {title && <S.Title>{title}</S.Title>}
      <S.Input
        type='search'
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </S.Search>
  )
}

SearchInput.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
}

export default SearchInput
