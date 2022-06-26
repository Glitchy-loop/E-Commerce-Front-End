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

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 750ms forwards ease;
`
