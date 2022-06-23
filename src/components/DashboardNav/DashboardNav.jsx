import React from "react"
import * as S from "./DashboardNav.styles"

const DashboardNav = ({ links }) => {
  return (
    <S.Nav>
      {links &&
        links.map((link) => (
          <S.StyledLinks to={link.url}>{link.title}</S.StyledLinks>
        ))}
    </S.Nav>
  )
}

export default DashboardNav
