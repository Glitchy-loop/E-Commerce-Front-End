import React from "react"
import PropTypes from "prop-types"
import * as S from "./ImgUploader.styles"

const ImgUploader = ({ label, handleChange }) => {
  return (
    <>
      <S.Label>
        {label}
        <S.Input
          type='file'
          id={label}
          onChange={(e) => handleChange(e.target.files[0])}
        />
      </S.Label>
    </>
  )
}

ImgUploader.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default ImgUploader
