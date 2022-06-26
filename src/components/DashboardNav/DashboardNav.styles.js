import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`

export const StyledLinks = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 1rem;
  text-transform: uppercase;

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
