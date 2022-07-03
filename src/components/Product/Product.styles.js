import styled from 'styled-components'

export const Product = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Img = styled.img`
  width: 100%;
  transition: 500ms;
`

export const Title = styled.div`
  text-decoration: none;
  font-size: 1.1rem;
  padding: 1rem;
`

export const Price = styled.div`
  font-size: 1.5rem;
  text-decoration: none;
  padding: 1rem;

  &::before {
    content: '€';
  }
`

export const Category = styled.div`
  text-decoration: none;
  padding-bottom: 1rem;
`

export const Description = styled.div`
  text-decoration: none;
  padding-bottom: 1rem;
  max-width: 60%;
`

export const InStock = styled.div`
  padding-bottom: 3rem;
`
