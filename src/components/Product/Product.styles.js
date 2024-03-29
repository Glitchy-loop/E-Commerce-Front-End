import styled from 'styled-components'

export const Product = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  span {
    font-size: 0.9rem;
    font-style: italic;
  }
`

export const Img = styled.img`
  width: 100%;
  transition: 2s;
  z-index: -10;
`

export const Title = styled.div`
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem;
`

export const Price = styled.div`
  font-size: 1.5rem;
  text-decoration: none;
`

export const Category = styled.div`
  text-decoration: none;
  padding-bottom: 1rem;
`

export const Description = styled.div`
  text-decoration: none;
  padding-bottom: 1rem;
  max-width: 60%;
  margin: 2rem 0;

  @media (max-width: 700px) {
    max-width: 80%;
  }
`

export const InStock = styled.div`
  padding-bottom: 3rem;
`
