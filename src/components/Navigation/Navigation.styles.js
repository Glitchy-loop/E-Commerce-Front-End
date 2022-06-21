import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  font-family: 'Roboto';
`

export const Navigation = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
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
  margin-right: 2rem;
  text-transform: uppercase;

  @media (min-width: 600px) {
    display: flex;
  }
`
