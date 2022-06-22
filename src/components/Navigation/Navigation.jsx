import React, { useState } from "react"
import * as S from "./Navigation.styles"
import logo from "../../assets/logo.png"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import Container from "../Container/Container"
import Button from "../Button/Button"
import { faUser, faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Navigation = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false)
  const token = localStorage.getItem("token")

  return (
    <>
      <Container>
        <S.Header>
          <S.Navigation>
            <S.LogoDiv>
              <Link to='/'>
                <S.Logo src={logo} alt='C' />
              </Link>
              <h4>COMFORT</h4>
            </S.LogoDiv>
            {/* DESKTOP MENU */}
            <S.DesktopMenu>
              <S.StyledLink to='/'>Home</S.StyledLink>
              <S.StyledLink to='/shop'>Shop</S.StyledLink>
              <S.StyledLink to='/contacts'>Contacts</S.StyledLink>
            </S.DesktopMenu>
            {/* USER MENU */}
            <S.UserMenu>
              <Link to='/cart'>
                <Button icon={faBasketShopping}></Button>
              </Link>
              {!token && (
                <Link to='/register'>
                  <Button icon={faUser}></Button>
                </Link>
              )}
              {token && (
                <Link to='/dashboard'>
                  <Button icon={faUser}></Button>
                </Link>
              )}
            </S.UserMenu>
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
              <S.StyledLink to='/shop'>Shop</S.StyledLink>
              <S.StyledLink to='/contacts'>Contacts</S.StyledLink>
              <S.StyledLink to='/dashboard'>My-Account</S.StyledLink>
              <S.StyledLink to='/cart'>CART</S.StyledLink>
            </S.Menu>
          )}
        </S.Header>
      </Container>
    </>
  )
}

export default Navigation
