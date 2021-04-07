import {
  faMinusCircle,
  faPlusCircle,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";

const Ordini = () => {
    return(
  <Alert variant="warning" className="alert">
    <Alert.Heading>Ordine inviato!</Alert.Heading>
    <p className="alertdescription">Ti ringraziamo per il tuo ordine</p>

    <p className="mb-0"></p>
  </Alert>
  )
};

export default Ordini;
