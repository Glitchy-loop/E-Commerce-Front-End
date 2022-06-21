import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  font-family: 'Roboto';
  border: 1px solid #c9c9c9;
  margin: 0 auto;
  box-sizing: border-box;
`

export const Navigation = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 600px) {
    justify-content: space-around;
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
`

export const Menu = styled.nav`
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
`

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 1rem;
`

export const DesktopMenu = styled.div`
  display: none;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #c9c9c9;

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

  @media (max-width: 600px) {
    display: none;
  }
`
