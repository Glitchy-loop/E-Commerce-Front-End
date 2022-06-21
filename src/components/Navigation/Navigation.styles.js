import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  background-color: grey;
  font-family: 'Roboto';
`

export const Navigation = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  max-width: 3rem;
  height: auto;
  padding-left: 2rem;
`

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  justify-content: center;
  transition: 1s;
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  padding-right: 2rem;
  cursor: pointer;
`

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 1rem;
`
