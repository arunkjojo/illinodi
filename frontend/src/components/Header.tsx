import React, { FC } from 'react';
import { Container, Nav, Navbar,Image } from 'react-bootstrap';
import {APP_DETAILS} from '../utils/constants'
import logo from '../assets/svg/logo.svg'
const Header:FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid className='header-container'>
                <Navbar.Brand className="brand" href="#home">
                    {/* <img
                        alt={APP_DETAILS.APP_NAME}
                        src={`../../assets/svg/logo.svg`}
                        width="30"
                        height="30"
                        className="brand-img d-inline-block align-top"
                    /> */}
                    <Image width="30" height="30" className="brand-img d-inline-block align-top" src={`${logo}`} alt={`${logo}`} />
                    <span className="brand-text">{APP_DETAILS.APP_NAME}</span>
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
export default Header;