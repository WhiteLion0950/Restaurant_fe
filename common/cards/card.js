import React from "react";
import { Card as CardCustom, Button } from 'react-bootstrap';

const CardCustom = ({ title, subtitle, description }) => {
    return (
        <Card style={{ width: '18rem' }} className="card-custom">
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                <Card.Title>{props.subtitle}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="primary" onClick={props.}>Dettaglio</Button>
            </Card.Body>
        </Card>
    )
}

export default CardCustom;