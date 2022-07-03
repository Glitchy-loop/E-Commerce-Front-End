import styled from 'styled-components'

export const CartView = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  display: flex;
  max-height: 10rem;
  border-top: 1px solid #000;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;

  img {
    width: 8rem;
    height: auto;
    padding-left: 10%;
  }
`

export const Title = styled.div``

export const Price = styled.div`
  padding-right: 10%;
`
