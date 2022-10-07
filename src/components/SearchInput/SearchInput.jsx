import React from "react"
import PropTypes from "prop-types"
import * as S from "./SearchInput.styles"
import { useState } from "react"

const SearchInput = ({ title, placeholder, handleSearch }) => {
  return (
    <S.Search>
      {title && <S.Title>{title}</S.Title>}
      <S.Input
        initial={{ opacity: 0, y: -10 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.3 },
        }}
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
