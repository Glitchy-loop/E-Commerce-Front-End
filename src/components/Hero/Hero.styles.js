import styled from 'styled-components'

export const Hero = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  min-height: 30vh;
  align-items: center;
  justify-content: center;
  background-position: center;
  background: url(${props => props.background}) no-repeat center;
  background-size: 100% auto;
  margin-bottom: 2rem;
  text-transform: uppercase;
`
