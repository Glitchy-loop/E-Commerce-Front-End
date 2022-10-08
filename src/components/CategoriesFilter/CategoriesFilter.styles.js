import styled from 'styled-components'

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  height: ${({ isFilterOpen }) => (isFilterOpen ? '4.3rem' : 0)};
  opacity: ${({ isFilterOpen }) => (isFilterOpen ? 1 : 0)};
  transition: opacity 150ms, height 250ms;
  /* background-color: #ccc; */
  border-radius: 0.5rem;
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  margin-bottom: 2rem;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
`

export const Category = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

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
  padding: 1rem;
  cursor: pointer;
`

export const FilterButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
`

export const CategoryList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`
