import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

//need to add as={NavLink} to the NavItems and add field to href
export default function NavigationBar() {
    return (
        <Navbar fixed="top" bg="success" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/home">Swingers Club</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/scoring">Scoring</Nav.Link>
                        <Nav.Link href="/scheduling">Scheduling</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}