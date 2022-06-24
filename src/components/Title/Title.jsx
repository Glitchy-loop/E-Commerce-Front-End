import React from "react"
import PropTypes from "prop-types"
import * as S from "./Title.styles"

const Title = ({ title, subtitle }) => {
  return (
    <S.Title>
      <h3>{title}</h3>
      {subtitle && <S.P>{subtitle}</S.P>}
    </S.Title>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
