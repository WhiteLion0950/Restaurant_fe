import React from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import {connect} from 'react-redux'

// Navbar componente semplice, non serve la gestione dello stato
// creiamo quindi un componente funzionale

const NavbarCustom = (props) => {
    return (
        <div className="navbar">
        <Navbar expand="lg">
            <Navbar.Brand href="" className="logo">Restaurant IFTS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav>
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">Panini</Nav.Link>
                    <Nav.Link href="">Offerte {props.counter}</Nav.Link>
                    <Nav.Link href="">Numero elementi Carrello {props.numberCart}</Nav.Link>
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
const mapStateToProps = state=>({
    counter: state.counter,
    numberCart:state.basket.length
})
export default connect(
    mapStateToProps,
    null,
)(NavbarCustom);