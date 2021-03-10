import React from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

// Navbar componente semplice, non serve la gestione dello stato
// creiamo quindi un componente funzionale

const NavbarCustom = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">Link1</Nav.Link>
                    <Nav.Link href="">Link2</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Cerca" className="mr-sm-2" />
                    <Button variant="primary">cerca</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarCustom;