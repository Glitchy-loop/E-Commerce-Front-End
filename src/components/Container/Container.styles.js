import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1rem)
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  font-family: 'Roboto';
  animation: ${fadeIn} 250ms forwards ease;
`
