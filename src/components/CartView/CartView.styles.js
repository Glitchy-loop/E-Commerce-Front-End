import styled from 'styled-components'

export const CartView = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  display: flex;
  max-height: 10rem;
  border: 1px solid #000;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-around;

  img {
    width: 8rem;
    height: auto;
  }
`
