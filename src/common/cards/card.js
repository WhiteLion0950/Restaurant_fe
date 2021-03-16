import React, { useCallback } from "react";
import { Card as CardCustom, Button } from 'react-bootstrap';

const Card = ({ urlImg, title, subTitle, description,callback }) => {
    return (
        <CardCustom  className="card-custom">
            <CardCustom.Img variant ="top" src={urlImg} />
            <CardCustom.Header>{title}</CardCustom.Header>
            <CardCustom.Body>
                <CardCustom.Title>{subTitle}</CardCustom.Title>
                <CardCustom.Text>{description}</CardCustom.Text>
                <Button variant="primary" onClick={()=>callback()}>Scopri</Button>
            </CardCustom.Body>
        </CardCustom>
    )
}

export default Card;