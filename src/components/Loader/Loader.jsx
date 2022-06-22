import React from "react"
import loader from "../../assets/Loader.gif"
import * as S from "./Loader.styles"

const Loader = () => {
  return (
    <S.Loader>
      <img src={loader} alt='Loading...' />
    </S.Loader>
  )
}

export default Loader
