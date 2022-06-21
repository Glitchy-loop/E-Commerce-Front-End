import React from "react"
import PropTypes from "prop-types"

const Checkbox = ({ label, handleChange, value }) => {
  return (
    <label>
      {label}
      <input
        type='radio'
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  )
}

Checkbox.propTypes = {}

export default Checkbox
