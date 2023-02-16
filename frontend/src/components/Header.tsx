import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid className='header-container'>
                <Navbar.Brand className="brand" href="#home">
                    <img
                        alt="illinodi.com"
                        src="../assets/logo.svg"
                        width="30"
                        height="30"
                        className="brand-img d-inline-block align-top"
                    />{' '}
                    <span className="brand-text">Illinodi.com</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="nav-bar" id="responsive-navbar-nav">
                    {/* 
                        ml-auto => ms-auto (start)
                        mr-auto => me-auto (end)
                    */}
                    <Nav className="nav ms-auto">
                        <Nav.Link className="nav-link btn btn-outline-primary" href="#login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
