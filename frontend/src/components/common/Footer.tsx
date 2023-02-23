import React, { FC } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Facebook, ShareFill, Whatsapp, Paypal } from "react-bootstrap-icons";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { APP_DETAILS } from '../../utils/constants'
// import { PaytmButton } from '../utils/paytm';
const Footer: FC = () => {
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
                  <FacebookShareButton
                    url={`${APP_DETAILS.APP_URL}`}
                    className="Demo__some-network__share-button"
                  >
                    <Facebook color="royalblue" size={30} />
                  </FacebookShareButton>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <WhatsappShareButton
                    url={`${APP_DETAILS.APP_URL}`}
                    className="Demo__some-network__share-button"
                  >
                    <Whatsapp color="green" size={30} />
                  </WhatsappShareButton>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <CopyToClipboard text={`${APP_DETAILS.APP_URL}`}>
                    <ShareFill color="red" size={30} />
                  </CopyToClipboard>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <Link to="payment"><Paypal color="blue" size={30} /></Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
export default Footer;