import React from "react";
import { Alert } from "react-bootstrap";

export const AlertCustom = () => (
 <Alert variant="danger" className="alert">
  <Alert.Heading>Qualcosa è andato Storto!</Alert.Heading>
  <p className="alertdescription">
    Ci dispiace , qualcosa nel caricamento della pagina è andato storto, prova a ricaricare e incrocia le dita!
  </p>
  
  <p className="mb-0">
    
  </p>
</Alert>
)

export default AlertCustom




//<Alert variant="danger">
  //  <Alert.Heading>Si è verificato un errore</Alert.Heading>
//  </Alert>