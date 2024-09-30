import React from 'react';
import Logo from '../assets/images/portfolio-logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/*
File Name: Navigation.jsx 
Student Name: Gichul Jaun
Student ID: 301375948
Course: COMP229-408
Date: October 1, 2024
*/

function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Container className="d-flex align-items-center">
        <Navbar.Brand>
          <Link to="/portfolio">
            <img
              src={Logo}
              alt="Portfolio logo image"
              style={{ marginBottom: '4.5px' }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content">
          <Nav className="me-auto">
            <Nav.Item className="mx-2">
              <Link
                to="/portfolio"
                className={path === '/portfolio' ? 'active' : ''}
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Link
                to="/portfolio/about"
                className={path === '/portfolio/about' ? 'active' : ''}
              >
                About
              </Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Link
                to="/portfolio/projects"
                className={path === '/portfolio/projects' ? 'active' : ''}
              >
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Link
                to="/portfolio/services"
                className={path === '/portfolio/services' ? 'active' : ''}
              >
                Services
              </Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Link
                to="/portfolio/contact"
                className={path === '/portfolio/contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </Nav.Item>
            {/* <Nav.Link eventKey="disabled" disabled>
              Under Construction
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
