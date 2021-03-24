import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card as CardCustom } from "react-bootstrap";
import { faMinusCircle,faPlusCircle } from '@fortawesome/free-solid-svg-icons'


export const CardProducts = ({ title, subtitle, description, image, callback, buttonText,addProductToBasket,removeProductFromBasket, }) => {
  return (
    <CardCustom className="card-custom">
      <CardCustom.Img variant="top" src={image} />
      <CardCustom.Header>{title}</CardCustom.Header>
      <CardCustom.Body>
        <CardCustom.Title>{subtitle}</CardCustom.Title>
        <CardCustom.Text>{description}</CardCustom.Text>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" onClick={()=>addProductToBasket() }className="buttonCart">{buttonText}</FontAwesomeIcon>
        quantità 
        <FontAwesomeIcon icon={faMinusCircle}size="lg"onClick={()=>removeProductFromBasket() }className="buttonCart">{buttonText}</FontAwesomeIcon>
                 
      </CardCustom.Body>
    </CardCustom>
  );
};

export default CardProducts;
