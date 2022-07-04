import styled from 'styled-components'

export const Categories = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 2rem;
  align-items: center;
`

export const Category = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  &::after {
    content: '';
    position: relative;
    display: block;
    border-bottom: 0.15rem solid #000;
    width: 0;
    transition: 500ms;
    margin: 0 auto;
    margin-top: 0.2rem;
  }
  &:hover::after {
    border-bottom: 0.15rem solid #000;
    width: 100%;
  }
`

export const Showall = styled.div`
  font-size: 0.9rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  cursor: pointer;
`
