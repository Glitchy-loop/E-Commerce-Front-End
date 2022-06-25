import React from "react"
import Container from "../Container/Container"
import * as S from "./Footer.styles"

const Footer = () => {
  return (
    <Container>
      <S.Footer>COMFORT {new Date().getFullYear()}</S.Footer>
    </Container>
  )
}

export default Footer
