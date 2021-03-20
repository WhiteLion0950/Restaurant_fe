import React from "react";
import { Card as CardCustom } from "react-bootstrap";

export const CardProducts = ({ title, subtitle, description, image }) => {
  return (
    <CardCustom className="card-custom">
      <CardCustom.Img variant="top" src={image} />
      <CardCustom.Header>{title}</CardCustom.Header>
      <CardCustom.Body>
        <CardCustom.Title>{subtitle}</CardCustom.Title>
        <CardCustom.Text>{description}</CardCustom.Text>
      </CardCustom.Body>
    </CardCustom>
  );
};
export default CardProducts;
