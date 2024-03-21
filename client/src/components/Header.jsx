import React from 'react'
import { Container, Form, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {

  const basicLinkStyle = { color: 'whitesmoke', textDecoration : 'none' }

  return (
    <Navbar expand="lg" className='bg-header' variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <Link style={basicLinkStyle} to='/'>Note Zipper</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
            <Form >
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 focus-ring focus-ring-light"
              />
            </Form>
        </Nav>
        <Nav>
              <Nav.Link href="/mynotes">
                <Link style={basicLinkStyle} to='/mynotes'>My Notes</Link>
              </Nav.Link>
              <NavDropdown
                id="collasible-nav-dropdown"
                title="Shiyas"
              >
                <NavDropdown.Item href="/profile">
                  <Link style={{...basicLinkStyle, color : 'black' }} to='/profile'>My Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header