import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Form = styled.form`
  margin: 0 auto;
  width: 80%;
  font-size: 1.2rem;

  input {
    background-color: #f8f8f8;
  }

  p {
    margin: 0;
  }

  input[type='email'],
  input[type='password'] {
    width: 100%;
  }

  input[type='radio'] {
    width: 10%;
  }

  input:focus {
    background-color: #fff;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
