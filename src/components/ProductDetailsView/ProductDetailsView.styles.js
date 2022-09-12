import styled from 'styled-components'

export const ProductDetailsView = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const ProductDetailsLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`

export const ProductDetailsRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  @media (max-width: 900px) {
    padding: 0;
  }

  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
  }
`

export const Img = styled.img`
  width: 100%;
  transition: 500ms;
`

export const Title = styled.div`
  text-decoration: none;
  text-align: left;
  font-size: 2rem;
  padding-top: 1rem;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    text-align: center;
  }
`

export const Hr = styled.hr`
  width: 5rem;
  margin-left: 0;
  height: 0.2rem;
  padding: 0;
  background: #ef8035;
  border: 0;

  @media (max-width: 700px) {
    margin: 1rem auto;
    text-align: center;
  }
`

export const Price = styled.div`
  font-size: 2rem;
  text-decoration: none;
  padding-top: 1rem;

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
`

export const Category = styled.div`
  text-decoration: none;
  padding-bottom: 1rem;
  font-style: italic;
  color: #a3a3a3;
`

export const Description = styled.div`
  text-decoration: none;
  padding-bottom: 1rem;
  max-width: 60%;
  margin: 2rem 0;

  @media (max-width: 700px) {
    max-width: 90%;
    text-align: center;
    margin: 0 auto;
  }
`

export const InStock = styled.div`
  padding: 2rem 0;
`

export const ButtonDiv = styled.div`
  @media (max-width: 700px) {
    margin: 0 auto;
    padding-bottom: 2rem;
  }
`
