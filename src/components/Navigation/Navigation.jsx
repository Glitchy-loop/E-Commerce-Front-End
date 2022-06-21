import React, { useState } from "react"
import * as S from "./Navigation.styles"
import logo from "../../assets/logo.png"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import SecondNavigation from "../SecondNavigation/SecondNavigation"

const Navigation = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false)
  const number = "095 424 24"

  return (
    <>
      <S.Header>
        <S.Navigation>
          <S.LogoDiv>
            <S.Logo src={logo} alt='C' />
            <h4>COMFORT</h4>
          </S.LogoDiv>

          {/* DESKTOP MENU */}
          <S.DesktopMenu>
            <S.StyledLink to='/'>Home</S.StyledLink>
            <S.StyledLink to='/shop'>Shop</S.StyledLink>
            <S.StyledLink to='/contacts'>Contacts</S.StyledLink>
          </S.DesktopMenu>
          <S.ContactNumber>{number}</S.ContactNumber>
          {/* MOBILE MENU HAMBURGER */}
          <S.MobileMenuIcon
            onClick={() => {
              setHiddenMenu((curr) => !curr)
            }}
            icon={hiddenMenu ? faX : faBars}
          ></S.MobileMenuIcon>
        </S.Navigation>
        {/* MOBILE MENU */}
        {hiddenMenu && (
          <S.Menu>
            <S.StyledLink to='/'>Home</S.StyledLink>
            <S.StyledLink to='/Shop'>Shop</S.StyledLink>
            <S.StyledLink to='/Contacts'>Contacts</S.StyledLink>
          </S.Menu>
        )}
      </S.Header>
      <SecondNavigation />
    </>
  )
}

export default Navigation
