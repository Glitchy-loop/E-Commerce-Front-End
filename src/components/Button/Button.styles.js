import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = styled.button`
  background: transparent;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    padding: 0.5rem;
  }
`

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.1rem;
`
