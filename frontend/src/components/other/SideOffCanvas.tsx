import React, { useState } from 'react';
import { Sliders } from 'react-bootstrap-icons';
import { Button, Nav, Offcanvas, Navbar } from 'react-bootstrap';


function SideOffCanvas() {
  const [show, setShow] = useState<Boolean>(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
        <Button variant="primary" onClick={toggleShow} className="d-lg-none me-2">
            <Sliders color='white'/>
        </Button>
        <Navbar.Text className="d-lg-none me-2">My profile</Navbar.Text>
        <Offcanvas responsive='lg' show={show} onHide={handleClose} scroll={true} backdrop="true">
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
                <Nav className="justify-content-stsrt flex-grow-1 pe-3">
                    <Nav.Item>
                        {/* Card START */}
                        <div className="card overflow-hidden">
                            {/* Cover image */}
                            <div className="h-50px" style={{
                                backgroundImage: `url(../assets/images/bg/01.jpg)`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}></div>
                            {/* Card body START */}
                            <div className="card-body pt-0">
                                <div className="text-center">
                                    {/* Avatar */}
                                    <div className="avatar avatar-lg mt-n5 mb-3">
                                        <a href="#!"><img className="avatar-img rounded border border-white border-3" src="../assets/images/avatar/07.jpg" alt="" /></a>
                                    </div>
                                    {/* Info */}
                                    <h5 className="mb-0"> <a href="#!">Sam Lanson </a> </h5>
                                    <small>Web Developer at Webestica</small>
                                    <p className="mt-3">I'd love to change the world, but they won’t give me the source code.</p>

                                    {/* User stat START */}
                                    <div className="hstack gap-2 gap-xl-3 justify-content-center">
                                        {/* User stat item */}
                                        <div>
                                            <h6 className="mb-0">256</h6>
                                            <small>Post</small>
                                        </div>
                                        {/* Divider */}
                                        <div className="vr"></div>
                                        {/* User stat item */}
                                        <div>
                                            <h6 className="mb-0">2.5K</h6>
                                            <small>Followers</small>
                                        </div>
                                        {/* Divider */}
                                        <div className="vr"></div>
                                        {/* User stat item */}
                                        <div>
                                            <h6 className="mb-0">365</h6>
                                            <small>Following</small>
                                        </div>
                                    </div>
                                    {/* User stat END */}
                                </div>

                                {/* Divider */}
                                <hr />

                                {/* Side Nav START */}
                                <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                                    <li className="nav-item">
                                        <a className="nav-link" href="my-profile.html"> <img className="me-2 h-20px fa-fw" src="../assets/images/icon/home-outline-filled.svg" alt="" /><span>Feed </span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="my-profile-connections.html"> <img className="me-2 h-20px fa-fw" src="../assets/images/icon/person-outline-filled.svg" alt="" /><span>Connections </span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="blog.html"> <img className="me-2 h-20px fa-fw" src="../assets/images/icon/earth-outline-filled.svg" alt="" /><span>Latest News </span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="events.html"> <img className="me-2 h-20px fa-fw" src="../assets/images/icon/calendar-outline-filled.svg" alt="" /><span>Events </span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="groups.html"> <img className="me-2 h-20px fa-fw" src="../assets/images/icon/chat-outline-filled.svg" alt="" /><span>Groups </span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="notifications.html"> <img className="me-2 h-20px fa-fw" src="../assets/images/icon/notification-outlined-filled.svg" alt="" /><span>Notifications </span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="settings.html"> <img className="me-2 h-20px fa-fw" src="../assets/images/icon/cog-outline-filled.svg" alt="" /><span>Settings </span></a>
                                    </li>
                                </ul>
                                {/* Side Nav END */}
                            </div>
                            {/* Card body END */}
                            {/* Card footer */}
                            <div className="card-footer text-center py-2">
                                <a className="btn btn-link btn-sm" href="my-profile.html">View Profile </a>
                            </div>
                        </div>
                        {/* Card END */}
                    </Nav.Item>
                    <Nav.Item>
                        {/* Helper link START */}
                        <Nav className="nav small mt-4 justify-content-center lh-1">
                            <Nav.Link>
                                <Nav.Link href="my-profile-about.html">About</Nav.Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Nav.Link href="settings.html">Settings</Nav.Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Nav.Link target="_blank" href="/login">Support </Nav.Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Nav.Link target="_blank" href="docs/index.html">Docs </Nav.Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Nav.Link href="help.html">Help</Nav.Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Nav.Link href="privacy-and-terms.html">Privacy & terms</Nav.Link>
                            </Nav.Link>
                        </Nav>
                        {/* Helper link END */}
                    </Nav.Item>
                    <Nav.Item>
                        {/* Copyright */}
                        <Navbar.Text className="small text-center mt-1">
                            ©2023 <Nav.Link href="/"> illinodi </Nav.Link>
                        </Navbar.Text>
                    </Nav.Item>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  );
}
export default SideOffCanvas;