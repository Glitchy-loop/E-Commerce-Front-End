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
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  transition: 250ms;

  &:active {
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
  }

  @media (max-width: 900px) {
    padding: 0.5rem;
  }
`

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.1rem;
`
