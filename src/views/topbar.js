import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  

import { NavLink } from 'react-router-dom'

export default class Topbar extends Component {

    render() {
        return (
            <div>
                <div className='bg-dark'>
                    <Navbar bg="primary" expand="md">
                        <Container>
                            <Navbar.Brand href="#home">Navbar Brand</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Dropdown Item 1</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Dropdown Item 2</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <p className='bg-dark'> hello</p>
                    {/* <NavLink to="/">Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/contact">Contact</NavLink> */}
                </div>
                {/* <h1>Cream's Portfolio</h1>
                <p>Home</p>
                <p>About Me</p>
                <p>Contact</p> */}
            </div>
        )
    }
}
