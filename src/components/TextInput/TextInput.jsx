import React from "react"
import PropTypes from "prop-types"
import * as S from "./TextInput.styles"

const TextInput = ({ type, label, placeholder, value, handleChange }) => {
  return (
    <>
      <S.Label htmlFor={label}>{label}</S.Label>
      <S.Input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  )
}

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password"]),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

TextInput.defaultProps = {
  type: "text",
}

export default TextInput
