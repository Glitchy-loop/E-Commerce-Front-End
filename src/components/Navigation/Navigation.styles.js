import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const slideDown = keyframes`
  from {
    transform:translateY(-4rem)
  }
  to {
    transform:translateY(0)
  }
`

export const Header = styled.header`
  font-family: 'Roboto';
  border-bottom: 0.1rem solid #c9c9c9;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 2rem;
  animation: ${slideDown} 1s forwards;
`

export const Navigation = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 600px) {
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between !important;
  }
`

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  height: 100%;
  align-items: center;
`

export const Logo = styled.img`
  max-width: 2.5rem;
  margin-right: 0.2rem;
  height: auto;
  padding-left: 2rem;

  @media (max-width: 600px) {
    padding-left: 0;
  }
`

export const Menu = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 600;

  @media (min-width: 600px) {
    display: none;
  }
`

export const MobileMenuIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-right: 2rem;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }

  @media (max-width: 600px) {
    margin-right: 0;
  }
`

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 1rem;

  &::after {
    content: '';
    position: relative;
    display: block;
    border-bottom: 0.15rem solid #000;
    width: 0;
    transition: 500ms;
    margin: 0 auto;
    margin-top: 0.2rem;
  }
  &:hover::after {
    border-bottom: 0.15rem solid #000;
    width: 100%;
  }
`

export const DesktopMenu = styled.div`
  display: none;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    display: flex;
    margin-left: 2rem;
  }
`

export const UserMenu = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 1rem;
  }

  @media (max-width: 599px) {
    display: none;
  }
`
