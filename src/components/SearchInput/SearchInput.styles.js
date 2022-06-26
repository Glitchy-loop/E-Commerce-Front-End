import styled from 'styled-components'

export const Search = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h4`
  font-size: 1.2rem;
  text-align: center;
`

export const Input = styled.input`
  padding: 1rem;
  outline: none;
  border: 0.1rem solid #c9c9c9;
  margin: 0 auto;
  width: 100%;
  transition: 250ms;

  &:focus {
    border-color: #ed8136;
  }
`
