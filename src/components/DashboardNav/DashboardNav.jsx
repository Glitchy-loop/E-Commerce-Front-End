import React, { useState } from "react"
import * as S from "./DashboardNav.styles"

const DashboardNav = ({ links }) => {
  const [token, setToken] = useState(localStorage.getItem("token"))

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
            localStorage.removeItem("orderId")
          }}
        >
          Log out
        </S.StyledLinks>
      )}
    </S.Nav>
  )
}

export default DashboardNav
