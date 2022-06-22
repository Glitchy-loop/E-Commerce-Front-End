import React from "react"
import PropTypes from "prop-types"

const Radio = ({ label, handleChange, value, name }) => {
  return (
    <label>
      {label}
      <input
        type='radio'
        name={name}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  )
}

Radio.propTypes = {}

export default Radio
