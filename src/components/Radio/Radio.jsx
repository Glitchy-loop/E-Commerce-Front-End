import React from "react"
import PropTypes from "prop-types"
import * as S from "./Radio.styles"

const Radio = ({ label, handleChange, value, name }) => {
  return (
    <S.LabelRadio>
      {label}
      <S.Radio
        type='radio'
        name={name}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </S.LabelRadio>
  )
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default Radio
