import React from "react"
import PropTypes from "prop-types"
import * as S from "./Button.styles"
import { Link } from "react-router-dom"

const Button = ({ icon, type, children, handleClick }) => {
  return (
    <S.Button type={type} onClick={handleClick}>
      {icon && <S.StyledIcon icon={icon} />}
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  children: PropTypes.string,
  handleClick: PropTypes.func,
  icon: PropTypes.object,
}

Button.defaultProps = {
  type: "button",
}

export default Button
