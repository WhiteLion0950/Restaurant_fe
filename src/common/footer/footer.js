import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

const FooterCustom = () => {
    return (
        <footer className="fixed-bottom  text-center">
            <Container className="footer-style">
                <Row>
                    <Col sm={6} xs={12}>&copy; 2021 Copyright</Col>
                    <Col sm={6} xs={12}>Privacy Policy & Cookies</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterCustom;