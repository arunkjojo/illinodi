import React, { FC } from 'react';
import { Container, Nav, Navbar, Image, NavDropdown, Form } from 'react-bootstrap';
// import { APP_NAME } from '../../utils/constants'
import logo from '../../assets/svg/logo.svg'
import icon from '../../assets/images/icon.png'

import { BellFill, ChatLeftDotsFill, GearFill } from 'react-bootstrap-icons';

const Header: FC = () => {
    return (
        // Logo Nav START
        <Navbar sticky="top" expand="lg" bg="light" variant="light">
            
            <Container fluid className='header-container'>

                {/* Logo START */}
                <Navbar.Brand className="brand" href="/">
                    <Image width="45" height="45" className="brand-img d-inline-block align-top" src={`${icon}`} alt={`${icon}`} />
                    {/* <span className="brand-text d-none d-md-inline">{APP_NAME}</span> */}
                </Navbar.Brand>
                {/* Logo END */}

                {/* Responsive navbar toggler */}
                <Navbar.Toggle aria-controls="navbarCollapse" className='ms-auto icon-md btn btn-light p-0' />

                {/* Main navbar START */}
                <Navbar.Collapse id="navbarCollapse">
                    {/* Nav Search START */}
                    <Nav className="mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
                        <Nav.Item className='w-100'>
                            <Form className="rounded position-relative">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="ps-5 bg-light me-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </Nav.Item>
                        
                    </Nav>
                    {/* Nav Search END */}
                    <Nav navbarScroll className='ms-auto'>
                        <Nav.Item>
                            <NavDropdown className='d-inline-block me-2 nav' title="Demo" id="collasible-nav-dropdown_demo">
                                <NavDropdown.Item href="#demo/home_default">Home default</NavDropdown.Item>
                                <NavDropdown.Item href="#demo/home_classic">Home classic</NavDropdown.Item>
                                <NavDropdown.Item href="#demo/home_post">Home post</NavDropdown.Item>
                                <NavDropdown.Item href="#demo/home_video">Home video</NavDropdown.Item>
                                <NavDropdown.Item href="#demo/home_event">Home event</NavDropdown.Item>
                                <NavDropdown.Item href="#demo/landing_page">Landing page</NavDropdown.Item>
                                <NavDropdown.Item href="#demo/app_download">App download</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#demo/nuy_social">Buy Social!</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <NavDropdown className="d-inline-block me-2 nav" title="Pages" id="collasible-nav-dropdown_pages">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>

                        <Nav.Item>
                            <NavDropdown className="d-inline-block me-2 nav" title="Account" id="collasible-nav-dropdown_account">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item className="d-inline-block me-2 nav">
                            <Nav.Link href="#network">My Network</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                {/* Main navbar END */}

                {/* Nav right START */}
                <Nav className='nav flex-row align-items-center ms-sm-3 list-unstyled'>
                    <Nav.Item className='ms-2'>
                        <Nav.Link className='nav-link p-0' href='/#messaging'>
                            <ChatLeftDotsFill color='gray' size={30} />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='ms-2'>
                        <Nav.Link className='nav-link p-0' href='/#setting'>
                            <GearFill color='gray' size={30} />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='ms-2'>
                        <Nav.Link className='nav-link p-0' href='/#notification'>
                            <BellFill color='gray' size={30} />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='ms-2'>
                        <Image className="rounded-circle user-img" rounded width="75" height="65" src={`${logo}`} alt={`${logo}`} />
                    </Nav.Item>
                </Nav>
                {/* Nav right END */}
            </Container>
        </Navbar>
        // Logo Nav END
    )
}
export default Header;