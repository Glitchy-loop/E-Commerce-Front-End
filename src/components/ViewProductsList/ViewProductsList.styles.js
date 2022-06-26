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
  padding: 1rem;
  text-align: center;
  overflow-y: auto;
`

export const Img = styled.img`
  width: 100%;
  height: auto;
`
