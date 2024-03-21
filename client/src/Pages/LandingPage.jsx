import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <main className='main'>
      <Container>
          <Row>
            <div className='welcome-screen'>
              <div className='welcome-text'>
                <h1>Welcome to Note Zipper</h1>
                <p>One safe place for all your notes.</p>
              </div>
              <div className="btnContainer">
                <Link to="/login">
                  <Button size='lg' className='land-btn' >Login</Button>
                </Link>
                <Link to="/register">
                  <Button size='lg' className='land-btn' variant='outline-primary'>Register</Button>
                </Link>
              </div>
            </div>
          </Row>
      </Container>
    </main>
  )
}

export default LandingPage