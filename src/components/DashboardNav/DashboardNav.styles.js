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
`
