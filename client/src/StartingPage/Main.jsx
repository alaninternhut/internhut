import React from 'react'
import './Main.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { JobForm } from '../Form/JobForm'

export const Main = () => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs='auto'>
          <img
            className='img'
            src='https://angel.co/images/recruit/Flashlight.png'
            alt='flashlight'
          />
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs='auto'>
          <p className='heading'>There are no jobs posted</p>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs='auto'>
          <p className='paragraph'>
            Your next best candidate is waiting for you. We have thousands of
            applicants looking for a new journey. Post a job now to get access.
          </p>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs='auto'>
          <Link to='/JobForm' className='link'>
            Post a job
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
