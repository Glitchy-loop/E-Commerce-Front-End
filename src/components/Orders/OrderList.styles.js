import styled from 'styled-components'

export const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  table-layout: fixed;

  & tr:nth-child(even) {
    background-color: #dadada;
  }

  button {
    margin: 0 auto;
  }

  @media (min-width: 769px) {
    width: 100%;
  }
`

export const Td = styled.td`
  border: 1px solid grey;
  padding: 0.5rem;
  text-align: center;
`
