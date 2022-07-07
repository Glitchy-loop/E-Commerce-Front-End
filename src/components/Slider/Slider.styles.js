import styled from 'styled-components'
import { Swiper } from 'swiper/react'
import { Link } from 'react-router-dom'

export const Slider = styled(Swiper)`
  width: 100%;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const ProductTitle = styled.div`
  font-size: 1.5rem;
  max-width: 80%;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

export const ProductDescription = styled.div`
  font-size: 0.9rem;
  max-width: 60%;
  padding-top: 1rem;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;

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
