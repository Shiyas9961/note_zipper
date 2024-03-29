import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{ position : 'relative', bottom : '0', display : 'flex', justifyContent : 'center' }}>
        <Container>
            <Row>
                <Col className='text-center py-3'>Copywrites &copy; Notezipper</Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer