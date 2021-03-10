import React, { useCallback } from "react";
import { Card as CardCustom, Button } from 'react-bootstrap';

const Card = ({ title, subTitle, description,callback }) => {
    return (
        <CardCustom style={{ width: '18rem' }} className="card-custom">
            <CardCustom.Header>{title}</CardCustom.Header>
            <CardCustom.Body>
                <CardCustom.Title>{subTitle}</CardCustom.Title>
                <CardCustom.Text>{description}</CardCustom.Text>
                <Button variant="primary" onClick={()=>callback()}>Dettaglio</Button>
            </CardCustom.Body>
        </CardCustom>
    )
}

export default Card;