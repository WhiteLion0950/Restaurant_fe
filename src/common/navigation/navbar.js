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
        <div className="navbar">
        <Navbar expand="lg">
            <Navbar.Brand href="" className="logo">Restaurant IFTS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav>
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">Panini</Nav.Link>
                    <Nav.Link href="">Offerte</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Cerca" className="mr-sm-2" />
                    <Button variant="primary">cerca</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default NavbarCustom;