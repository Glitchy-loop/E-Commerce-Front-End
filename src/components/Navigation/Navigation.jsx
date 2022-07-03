import React, { useState } from "react"
import * as S from "./Navigation.styles"
import logo from "../../assets/logo.png"
import {
  faUser,
  faBars,
  faX,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons"
import Container from "../Container/Container"
import Button from "../Button/Button"
import { Link } from "react-router-dom"
import Basket from "../Basket/Basket"

const authLinks = [{ url: "/dashboard", title: "Dashboard" }]
const publicLinks = [{ url: "/login", title: "Login" }]

const Navigation = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false)
  const [token, setToken] = useState(localStorage.getItem("token"))

  const links = token ? authLinks : publicLinks

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
              <S.StyledLink to='/about'>About</S.StyledLink>
            </S.DesktopMenu>
            {/* USER MENU */}
            <S.UserMenu>
              {/* <Link to='/cart'>
                <Button icon={faBasketShopping}></Button>
              </Link> */}
              {links &&
                links.map((link) => (
                  <Link key={link} to={link.url}>
                    <Button icon={faUser}></Button>
                  </Link>
                ))}
              <Basket />
            </S.UserMenu>
            {/* MOBILE MENU HAMBURGER */}
            <S.MobileMenuIcon
              onClick={() => {
                setHiddenMenu((x) => !x)
              }}
              icon={hiddenMenu ? faX : faBars}
            ></S.MobileMenuIcon>
          </S.Navigation>

          {/* MOBILE MENU */}
          {hiddenMenu && (
            <S.Menu>
              <S.StyledLink to='/'>Home</S.StyledLink>
              <S.StyledLink to='/shop'>Shop</S.StyledLink>
              <S.StyledLink to='/about'>About</S.StyledLink>
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
