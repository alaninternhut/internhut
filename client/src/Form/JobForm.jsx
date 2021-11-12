import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './JobForm.css'
import Axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  margin: 7%;
`

export const JobForm = () => {
  const url = '/api/job/add-job'

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [position, setPosition] = useState('Full-time employee')
  const [primary_role, setRole] = useState('Software Engineer')
  const [currency, setCurrency] = useState('United States Dollar')
  const [firstSal, setfirstSal] = useState('')
  const [secondSal, setSecondSal] = useState('')
  const [firstEquity, setFirstEquity] = useState('')
  const [secondEquity, setSecondEquity] = useState('')
  const [experience, setExperience] = useState('0+ years of experience')
  const [skills, setSkills] = useState('')
  const [location, setLocation] = useState('')
  const [visa, setVisa] = useState('Yes')
  const [skip, setSkip] = useState('No')
  const [accessibilty, setAccessibility] = useState('')
  const [contact, setContact] = useState('Rifaath')
  const [subscriber, setSubscriber] = useState('Rifaath')

  const handlePublish = (e) => {
    e.preventDefault()
    const data = {
      title,
      description,
      position,
      primary_role,
      salary: [currency, firstSal, secondSal],
      equity: [firstEquity, secondEquity],
      experience,
      skills,
      location,
      visa,
      skip,
      accessibilty,
      contact,
      subscriber,
    }

    Axios.post(url, data).then((res) => {
      console.log(res.data)
    })
  }

  return (
    <Container>
      <Form onSubmit={handlePublish}>
        <h4 style={{ marginBottom: '2%' }}>1. Job Details</h4>
        <Form.Group className='mb-3'>
          <Form.Label>Title *</Form.Label>
          <Form.Control
            type='text'
            placeholder='e.g. Software Engineer, Product Designer, etc.'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Describe the responsibilities of the position. You can always change this later'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Label required>Type of position *</Form.Label>
        <Form.Select
          aria-label='Default select example'
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option>Full-time employee</option>
          <option value='Full-time employee'>Full-time employee</option>
          <option value='Contractor'>Contractor</option>
          <option value='Cofounder'>Cofounder</option>
          <option value='Intern'>Intern</option>
        </Form.Select>
        <Form.Label style={{ marginTop: '1%' }}>Primary Role *</Form.Label>
        <Form.Select
          placeholder='Select role'
          required
          value={primary_role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value='1'>Choose Role</option>
          <option value='Software Engineer'>Software Engineer</option>
          <option value='Product Designer'>Product Designer</option>
        </Form.Select>

        <h4 style={{ marginTop: '3%', marginBottom: '2%' }}>Salary & Equity</h4>
        <p>
          Job posts that share compensation details drive 30% more applicants on
          average. Leaving out this information will limit the distribution of
          your job. If you'd rather not share these details, you can always
          promote your job to continue showing up in search.
        </p>

        <Form.Label>Currency</Form.Label>
        <Form.Select
          required
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value='United States Dollar'>United States Dollar</option>
          <option value='Indian Rupees'>Indian Rupees</option>
          <option value='British Pounds'>British Pounds</option>
        </Form.Select>

        <Form.Label style={{ marginTop: '2%' }}>Annual salary range</Form.Label>
        <p>
          The provided values will be rounded down to the nearest thousand. The
          range between these values must be no more than $80,000 USD.
        </p>

        <Row>
          <Col>
            <Form.Control
              type='number'
              placeholder='60,000'
              value={firstSal}
              onChange={(e) => setfirstSal(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              type='number'
              placeholder='70,000'
              value={secondSal}
              onChange={(e) => setSecondSal(e.target.value)}
            />
          </Col>
        </Row>

        <Form.Label style={{ marginTop: '2%' }}>Equity Range</Form.Label>
        <Row>
          <Col>
            <Form.Control
              type='number'
              placeholder='0.0'
              value={firstEquity}
              onChange={(e) => setFirstEquity(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              type='number'
              placeholder='1.0'
              value={secondEquity}
              onChange={(e) => setSecondEquity(e.target.value)}
            />
          </Col>
        </Row>

        <Form.Label style={{ marginTop: '2%' }} for='experience'>
          Work experience
        </Form.Label>
        <Form.Select
          aria-label='Default select example'
          required
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        >
          <option value='0+ years of experience'>0+ years of experience</option>
          <option value='5+ years of experience'>5+ years of experience</option>
          <option value='7+ years of experience'>7+ years of experience</option>
        </Form.Select>
        <Form.Group className='mb-3'>
          <Form.Label style={{ marginTop: '2%' }}>Skills</Form.Label>
          <Form.Control
            type='text'
            placeholder='e.g. Python, React, etc.'
            required
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </Form.Group>
        <Form.Label>Visa Sponsorship (US only)</Form.Label>

        <div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault1'
              checked={visa === 'Yes'}
              value='Yes'
              onChange={(e) => setVisa(e.target.value)}
            />
            <label className='form-check-label' htmlFor='flexRadioDefault1'>
              Yes
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault2'
              checked={visa === 'No'}
              value='No'
              onChange={(e) => setVisa(e.target.value)}
            />
            <label className='form-check-label' htmlFor='flexRadioDefault2'>
              No
            </label>
          </div>
        </div>

        <Form.Label style={{ marginTop: '1%' }}>
          What kind of employees are you hiring?
        </Form.Label>

        <div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='inlineRadioOptions'
              id='inlineRadio1'
              checked={accessibilty === 'In-office only'}
              value='In-office only'
              onClick={(e) => setAccessibility(e.target.value)}
            />
            <label className='form-check-label' htmlFor='inlineRadio1'>
              In-office only
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='inlineRadioOptions'
              id='inlineRadio2'
              checked={accessibilty === 'Remote accepted or remote-only'}
              value='Remote accepted or remote-only'
              onChange={(e) => setAccessibility(e.target.value)}
            />
            <label className='form-check-label' htmlFor='flexRadioDefault2'>
              Remote accepted or remote-only
            </label>
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value={skip}
              id='flexCheckDefault'
              onClick={(e) => setSkip(e.target.checked)}
            />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
              Auto-skip applicants who cannot relocate for this position
            </label>
          </div>
        </div>

        <Form.Group className='mb-3 location'>
          <Form.Label className='location-text' style={{ marginBottom: '1%' }}>
            Location *
          </Form.Label>
          <Form.Text className='text-muted location-subtext'>
            Where are you hiring for this role?
          </Form.Text>
          <Form.Control
            type='text'
            placeholder='e.g. San Francisco'
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>

        <h4 style={{ marginTop: '3%', marginBottom: '2%' }}>
          2. Recruiting Contact
        </h4>

        <Form.Label className='prc'>Primary recruiting contact</Form.Label>
        <Form.Select
          aria-label='Default select example'
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        >
          <option value='Rifaath'>Rifaath</option>
          <option value='Alan'>Alan</option>
          <option value='Dexter'>Dexter</option>
        </Form.Select>

        <Form.Group className='mb-3 subscribers-container'>
          <Form.Label style={{ marginTop: '2%', marginBottom: '0' }}>
            Subscribers
          </Form.Label>
          <Form.Text className='text-muted' style={{ marginBottom: '1.5%' }}>
            Who should receive applicants for this role. The recruiting contact
            will always be subscribed.
          </Form.Text>
          <Form.Select
            aria-label='Default select example'
            required
            value={subscriber}
            onChange={(e) => setSubscriber(e.target.value)}
          >
            <option>Select subscribers</option>
            <option value='Rifaath'>Rifaath</option>
            <option value='Alan'>Alan</option>
            <option value='Dexter'>Dexter</option>
          </Form.Select>
        </Form.Group>
        <Button style={{ marginTop: '20px' }} variant='primary' type='submit'>
          Publish
        </Button>
      </Form>
    </Container>
  )
}
