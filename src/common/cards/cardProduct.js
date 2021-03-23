import React from "react";
import { Card as CardCustom } from "react-bootstrap";

export const CardProducts = ({ title, subtitle, description, image, callback, buttonText }) => {
  return (
    <CardCustom className="card-custom">
      <CardCustom.Img variant="top" src={image} />
      <CardCustom.Header>{title}</CardCustom.Header>
      <CardCustom.Body>
        <CardCustom.Title>{subtitle}</CardCustom.Title>
        <CardCustom.Text>{description}</CardCustom.Text>
        <button onClick={()=>callback() }className="buttonCart">{buttonText}</button> 
      </CardCustom.Body>
    </CardCustom>
  );
};
export default CardProducts;
