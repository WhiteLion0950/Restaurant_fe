import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card as CardCustom } from "react-bootstrap";
import { faMinusCircle, faPlusCircle,faEuroSign } from "@fortawesome/free-solid-svg-icons";
import {Button} from 'react-bootstrap'
export const CardProducts = ({
  title,
  subtitle,
  description,
  image,
  callback,
  buttonText,
  addProductToBasket,
  removeProductFromBasket,
  qnt,
  price,
  goToDetails
}) => {
  return (
    <CardCustom className="card-custom">
      <CardCustom.Img variant="top" src={image} />
      <CardCustom.Header>{title}</CardCustom.Header>
      <CardCustom.Body>
        <CardCustom.Title>{subtitle}</CardCustom.Title>
        <CardCustom.Text>{description}</CardCustom.Text>
        <CardCustom.Text>{price}<FontAwesomeIcon icon={faEuroSign}></FontAwesomeIcon></CardCustom.Text>
        <Button onClick={()=>goToDetails()}>Vai alla Scheda</Button> 
        <br></br>
        <br></br>
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="lg"
          onClick={() => addProductToBasket()}
          className="buttonCart"
        >
          {buttonText}
        </FontAwesomeIcon>
        <span>{qnt}</span>
        <FontAwesomeIcon
          icon={faMinusCircle}
          size="lg"
          onClick={() => removeProductFromBasket()}
          className="buttonCart"
        >
          {buttonText}
        </FontAwesomeIcon>
      </CardCustom.Body>
    </CardCustom>
  );
};

export default CardProducts;
