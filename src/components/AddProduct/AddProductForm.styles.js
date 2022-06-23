import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Form = styled.form`
  margin: 0 auto;
  width: 80%;
  font-size: 1.2rem;

  p {
    margin: 0;
  }

  input[type='text'],
  input[type='file'] {
    width: 100%;
  }

  input[type='radio'] {
    width: 10%;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
