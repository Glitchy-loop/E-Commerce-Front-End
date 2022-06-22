import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: #000;
  margin: 1rem;
  width: calc(33.33% - 2rem);
  box-sizing: border-box;
  align-items: center;
  transition: 250ms;
  text-decoration: none;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px;
  }

  @media (max-width: 769px) {
    width: calc(50% - 2rem);
  }

  @media (max-width: 600px) {
    width: calc(100% - 2rem);
  }
`
