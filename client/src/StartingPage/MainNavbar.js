import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavbar = styled(Navbar)`
  background-color: #162040;
  height: 60px;
`
const StyledLink = styled(Link)`
  color: white;
  margin-right: 47%;
  &:hover {
    text-decoration: underline;
    color: white;
  }
`
const StyledContainer = styled(Container)`
  align-items: center;
`

const MainNavbar = () => {
  return (
    <StyledNavbar>
      <StyledContainer>
        <Nav className='me-auto'>
          <StyledLink to='/Track'>Track</StyledLink>
          <StyledLink style={{ color: 'white' }} to='/'>
            Jobs
          </StyledLink>
        </Nav>
      </StyledContainer>
    </StyledNavbar>
  )
}

export default MainNavbar
