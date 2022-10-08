import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Search = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h4`
  font-size: 1.2rem;
  text-align: center;
`

export const Input = styled(motion.input)`
  padding: 1rem;
  outline: none;
  margin: 0 auto;
  width: 100%;
  transition: 250ms;
  border-radius: 0.5rem;
  border: none;
  width: 20%;
  text-align: center;
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  margin-bottom: 2rem;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  background-color: #f8f8f8;

  &:focus {
    border-color: #ed8136;
    width: 100%;
    border: 2px solid #000;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    background-color: #fff;
  }

  &:focus::placeholder {
    color: transparent;
  }
`
