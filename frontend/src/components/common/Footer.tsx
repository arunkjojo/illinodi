import React, { FC } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Facebook, ShareFill, Whatsapp, CashCoin } from "react-bootstrap-icons";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { APP_URL } from '../../utils/constants'


const Footer: FC = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container fluid className='footer-container'>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse> */}
          <Nav className="nav me-auto">
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav>
          </Nav>
          <Nav className="nav me-auto">
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav>
          </Nav>
          <Nav className="nav me-auto">
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav>
          </Nav>
          <Nav className="nav ms-auto d-none d-sm-inline-block">
            <Nav className="justify-content-end" activeKey="/">
              <Nav.Item>
                <Nav.Link href="/">
                  <FacebookShareButton
                    url={`${APP_URL}`}
                  >
                    <Facebook color="royalblue" size={30} />
                  </FacebookShareButton>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <WhatsappShareButton
                    url={`${APP_URL}`}
                  >
                    <Whatsapp color="green" size={30} />
                  </WhatsappShareButton>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <CopyToClipboard text={`${APP_URL}`}>
                    <ShareFill color="red" size={30} />
                  </CopyToClipboard>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <CashCoin color="blue" size={30} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav>
        {/* </Navbar.Collapse> */}

      </Container>
    </Navbar>
  )
}
export default Footer;