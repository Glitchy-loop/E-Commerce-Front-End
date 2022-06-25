import React from "react"
import PropTypes from "prop-types"
import * as S from "./Title.styles"

const Title = ({ title, subtitle }) => {
  return (
    <S.Title>
      <S.Main>{title}</S.Main>
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.Title>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
