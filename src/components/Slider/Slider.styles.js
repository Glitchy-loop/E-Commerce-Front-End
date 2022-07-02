import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

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
  padding: 1rem;
  max-width: 60%;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

export const ProductDescription = styled.div`
  font-size: 0.9rem;
  max-width: 60%;
`
