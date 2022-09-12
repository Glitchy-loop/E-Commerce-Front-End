import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    display: none;
  }
`

export const StyledLinks = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 1rem;
  text-transform: uppercase;

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

export const MobileDashoardNav = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 1rem;
`

export const MobileMenuIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  cursor: pointer;
  align-self: center;

  @media (min-width: 600px) {
    display: none;
  }
`

export const MobileDashboadMenu = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const StyledMobileDashboardLinks = styled(Link)`
  text-decoration: none;
  padding: 0.5rem;
  color: #000;
  text-align: center;
  text-transform: uppercase;
`
