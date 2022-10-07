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

  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 700px) {
    width: 100%;
  }
`

export const ProductTitle = styled.div`
  font-size: 1.5rem;
  max-width: 100%;
  @media (max-width: 700px) {
    position: absolute;
    background-color: #ffede1;
    padding: 1rem;
    left: 0;
    top: 2rem;
  }
`

export const ProductDescription = styled.div`
  font-size: 0.9rem;
  max-width: 60%;
  padding-top: 1rem;
  text-align: center;

  @media (max-width: 700px) {
    display: none;
  }
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

export const StyledLinkForImage = styled(Link)`
  text-decoration: none;
  color: #000;
`
