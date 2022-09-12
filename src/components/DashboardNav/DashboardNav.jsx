import React, { useState } from "react"
import * as S from "./DashboardNav.styles"
import { faGauge, faX } from "@fortawesome/free-solid-svg-icons"

const DashboardNav = ({ links }) => {
  const [token] = useState(localStorage.getItem("token"))
  const [hiddenMenu, setHiddenMenu] = useState(false)

  return (
    <>
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
      {/* MOBILE MENU */}
      <S.MobileDashoardNav>
        <S.MobileMenuIcon
          onClick={() => {
            setHiddenMenu((x) => !x)
          }}
          icon={hiddenMenu ? faX : faGauge}
        ></S.MobileMenuIcon>
        {hiddenMenu && (
          <S.MobileDashboadMenu
            initial={{ height: 0, opacity: 0, padding: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { delay: 0.1 },
              padding: 20,
            }}
          >
            {links &&
              links.map((link) => (
                <S.StyledMobileDashboardLinks key={link.title} to={link.url}>
                  {link.title}
                </S.StyledMobileDashboardLinks>
              ))}
          </S.MobileDashboadMenu>
        )}
      </S.MobileDashoardNav>
    </>
  )
}

export default DashboardNav
