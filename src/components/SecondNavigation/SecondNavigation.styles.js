import styled from 'styled-components'

export const SecondNavigation = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c9c9c9;
  max-width: 100rem;
  margin: 0 auto;

  /* @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
  } */
`

export const CatalogDiv = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  height: 100%;
  align-items: center;
  padding-left: 2rem;
`

export const UserMenu = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 1rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`
