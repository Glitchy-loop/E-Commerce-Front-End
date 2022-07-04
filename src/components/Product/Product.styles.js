import styled from 'styled-components'

export const Product = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`

export const Img = styled.img`
  width: 100%;
  transition: 500ms;
`

export const Title = styled.div`
  text-decoration: none;
  font-size: 1.1rem;
  padding: 1rem;
  margin-bottom: 2rem;
`

export const Price = styled.div`
  font-size: 1.5rem;
  text-decoration: none;
  padding-bottom: 1rem;

  &::before {
    content: '€';
  }
`

export const Category = styled.div`
  text-decoration: none;
  padding-bottom: 1rem;
  margin-bottom: 5rem;
`

export const Description = styled.div`
  text-decoration: none;
  padding-bottom: 1rem;
  max-width: 60%;
  margin: 2rem 0;
`

export const InStock = styled.div`
  padding-bottom: 3rem;
`
