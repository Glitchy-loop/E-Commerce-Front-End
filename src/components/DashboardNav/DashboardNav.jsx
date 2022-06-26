import React from "react"
import * as S from "./DashboardNav.styles"

const token = localStorage.getItem("token")

const DashboardNav = ({ links }) => {
  return (
    <S.Nav>
      {links &&
        links.map((link) => (
          <S.StyledLinks key={link.title} to={link.url}>
            {link.title}
          </S.StyledLinks>
        ))}
      {token && (
        <S.StyledLinks
          to='/'
          onClick={() => {
            localStorage.removeItem("token")
            localStorage.removeItem("roles")
            localStorage.removeItem("userId")
          }}
        >
          Log out
        </S.StyledLinks>
      )}
    </S.Nav>
  )
}

export default DashboardNav
