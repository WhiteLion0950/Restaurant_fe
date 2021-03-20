import React from "react";
import { Alert } from "react-bootstrap";

export const AlertCustom = () => (
 <Alert variant="danger">
  <Alert.Heading>Qualcosa è andato storto!</Alert.Heading>
  <p>
    Ci dispiace , qualcosa nel caricamento della pagina è andato storto, prova a ricaricare e incrocia le dita!
  </p>
  
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
)

export default AlertCustom




//<Alert variant="danger">
  //  <Alert.Heading>Si è verificato un errore</Alert.Heading>
//  </Alert>