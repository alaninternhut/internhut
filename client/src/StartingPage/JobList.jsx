import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import Posts from './Posts'

const MainContainer = styled(Container)`
  height: 623px;
  width: 320px;
  background-color: #f2f8ff;
  padding: 1%;
  border: 0.5px solid lightgray;
  overflow-y: auto;
`
const FlexContainer = styled.div`
  display: flex;
`
const StyledLink = styled(Link)`
  color: #0a6cff;
  font-weight: 600;
  margin-left: 35%;
  margin-top: 2%;
  cursor: pointer;
  font-size: 17px;
`

const Title = styled.h3`
  color: #385075;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
  margin-top: 1%;
`
const SearchContainer = styled.div`
  background-color: white;
  border: none;
  border-radius: 15px;
  height: 5%;
  display: flex;
  align-items: center;
  margin-left: 5px;
  padding: 5px;
  margin-top: 5%;
  &:hover {
    border: solid 1.5px #0a6cff;
  }
`

const Input = styled.input`
  border: none;
  border-radius: 15px;
  outline: none;
`

const JobList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(100)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get(
        '/api/job/get-all-jobs'
      )
      setPosts(res.data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  return (
    <MainContainer>
      <FlexContainer>
        <Title>Jobs</Title>
        <StyledLink to='/JobForm'>+ Post Job</StyledLink>
      </FlexContainer>
      <SearchContainer>
        <Search style={{ color: 'grey', fontSize: 16, marginRight: '5%' }} />
        <Input placeholder='Search by job' />
      </SearchContainer>
      <Posts posts={posts} loading={loading} />
    </MainContainer>
  )
}

export default JobList
