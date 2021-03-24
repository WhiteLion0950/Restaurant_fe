import React from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// Navbar componente semplice, non serve la gestione dello stato
// creiamo quindi un componente funzionale

const NavbarCustom = (props) => {
    return (
        <div className="navbar">
        <Navbar expand="lg" class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
            <Navbar.Brand href="" className="logo">Restaurant IFTS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav>
                    <Nav.Link href="#/">Home</Nav.Link>
                    <Nav.Link href="#categories/2">Panini</Nav.Link>
                    <Nav.Link href="#categories/23">Offerte</Nav.Link>
                    
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Cerca" className="mr-sm-2" />
                    <Button className="buttonNav">Cerca</Button>
                </Form>
            </Navbar.Collapse>
            <Nav.Link className="van">
            <FontAwesomeIcon icon={faShoppingCart}/>
            Cart:{props.numberCart}</Nav.Link>
        </Navbar>
        </div>
    )
}
const mapStateToProps = state=>({
    counter: state.counter,
    numberCart:state.basket && state.basket.length >0 ? state.basket.reduce((somma, corrente)=> somma+corrente.qnt,0):0
})
export default connect(
    mapStateToProps,
    null,
)(NavbarCustom);
