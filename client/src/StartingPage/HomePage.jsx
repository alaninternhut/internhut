import React from 'react'
import { Main } from './Main'
import JobList from './JobList'
import './HomePage.css'
import styled from 'styled-components'
import MainNavbar from './MainNavbar'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const MainContainer = styled.div`
  display: flex;
`

const HomePage = () => {
  return (
    <Container>
      <MainNavbar />
      <MainContainer>
        <JobList />
        <Main />
      </MainContainer>
    </Container>
  )
}

export default HomePage
