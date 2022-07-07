import React from "react"
import Title from "../Title/Title"
import * as S from "./Hero.styles"

const Hero = ({ title, imgUrl }) => {
  return (
    <S.Hero background={imgUrl}>
      <Title title={title} />
    </S.Hero>
  )
}

export default Hero
