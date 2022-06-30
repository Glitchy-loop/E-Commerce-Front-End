import React from "react"
import PropTypes from "prop-types"
import * as S from "./Button.styles"

const Button = ({ outline, icon, type, children, handleClick }) => {
  return (
    <S.Button type={type} onClick={handleClick}>
      {icon && <S.StyledIcon icon={icon} />}
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleClick: PropTypes.func,
  icon: PropTypes.object,
}

Button.defaultProps = {
  type: "button",
}

export default Button
