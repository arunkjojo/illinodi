import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Facebook, ShareFill, Whatsapp } from "react-bootstrap-icons";
import { PaytmButton } from '../utils/paytm';
export const Footer = () => {
  return (
    <Navbar className="my-3 footer_navbar" bg="dark" variant="dark">
      <Container className='footer-container'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="nav-bar" id="responsive-navbar-nav">
          <Nav className="nav me-auto">
            <Nav defaultActiveKey="/#" className="flex-column">
              <Nav.Link href="/#">Home</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav>
          </Nav>
          <Nav className="nav me-auto">
            <Nav defaultActiveKey="/#" className="flex-column">
              <Nav.Link href="/#">Home</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav>
          </Nav>
          <Nav className="nav me-auto">
            <Nav defaultActiveKey="/#" className="flex-column">
              <Nav.Link href="/#">Home</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav>
          </Nav>
          <Nav className="nav me-auto">
            <Nav className="justify-content-end" activeKey="/#">
              <Nav.Item>
                <Nav.Link href="/#">
                  <Facebook color="royalblue" size={30} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <Whatsapp color="green" size={30} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <ShareFill color="red" size={30} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  {/* Paytm Component */}
                  <PaytmButton />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
