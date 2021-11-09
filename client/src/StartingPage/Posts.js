import React from 'react'
import styled from 'styled-components'

const Loading = styled.h3`
  color: #385075;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
  margin-top: 15%;
`

const JobTitle = styled.p`
  font-weight: 200;
  margin-bottom: 0.5%;
`

const Location = styled.p`
  color: #717584;
  font-size: 12px;
  line-height: 1.67;
`

const JobListContainer = styled.ul`
  margin-top: 15%;
  margin-bottom: 15%;
`

const JobList = styled.li`
  &:hover {
    background-color: #dde9f8;
    border: 1px solid #dde9f8;
  }
`

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <Loading>Loading...</Loading>
  }

  return (
    <JobListContainer>
      {posts.map((post) => (
        <JobList key={post.id}>
          <JobTitle>{post.title}</JobTitle>
          <Location>{post.location}</Location>
        </JobList>
      ))}
    </JobListContainer>
  )
}

export default Posts
