import {
  faMinusCircle,
  faPlusCircle,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React  from "react";
import {
  addProductToBasket,
  removeProductFromBasket,
} from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { postCreateOrders } from "../functions/api";
import { deleteCart } from '../../redux/actions'
import Ordini from './ordini'

const Carrello = (props) => {
  const[avviso, setAvviso]=useState(false);
  const [additions, setAdditions] = useState("");

  const handleSubmit = (event) => {
    const ordine = [];
    props.basket.forEach((curr) => {
      ordine.push({
        product_id: curr.product.id,
        qnt: curr.qnt,
        additions: [additions],
      });
    });
    event.preventDefault();
    postCreateOrders(ordine)
      .then((response) => this.props.history.push("/orders"))
      .catch((error) => console.warn(error));
      props.deleteCart()
      setAvviso(true)
  };


  return (
    <>
    <Form onSubmit={handleSubmit}>
      <div className="boxTable" align="center">
        <h2>Il tuo Carrello</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="thTab">
                Prodotti
              </th>
              <th scope="col" className="thTab">
                Quantità
              </th>
              <th scope="col" className="thTab">
                Prezzo Singolo
              </th>
              <th scope="col" className="thTab">
                Aggiunte
              </th>
            </tr>
          </thead>
          <tbody>
            {props.basket.map((curr, idx) => (
              <tr key={`${idx}`}>
                <td className="thTab">{curr.product.title}</td>
                <td>
                  <FontAwesomeIcon
                    onClick={() => {
                      props.removeProductFromBasket(1, curr.product.id);
                    }}
                    icon={faMinusCircle}
                  />
                  {curr.qnt}
                  <FontAwesomeIcon
                    onClick={() => {
                      props.addProductToBasket(1, curr.product);
                    }}
                    icon={faPlusCircle}
                  />
                </td>
                <td className="thTab">
                  {curr.product.price}
                  <FontAwesomeIcon icon={faEuroSign} />
                </td>
                <td>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="additions"
                    onChange={(event) => setAdditions(event.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="thTab">
                Totale :{" "}
                {props.basket
                  .reduce((acc, curr) => acc + curr.qnt * curr.product.price, 0)
                  .toFixed(2)}
                <FontAwesomeIcon icon={faEuroSign} />
              </th>
              <th className="thTab">
                <Button className="buttonNav" type="submit" >
                  Ordina
                </Button>
              </th>
              <th className="thTab">
                <Button
                  className="buttonNav"
                  onClick={() => {
                    props.history.push("/storico");
                  }}
                >
                  Storico Ordini
                </Button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </Form>
     {avviso ? <Ordini /> :null}
    </>
  );
};

const mapActionToProps = {
  addProductToBasket: (qnt, product) => addProductToBasket(qnt, product),
  removeProductFromBasket: (qnt, id) => removeProductFromBasket(qnt, id),
  deleteCart: () => deleteCart()
};
const mapStateToProps = (state) => ({
  basket: state.basket,
});
export default connect(mapStateToProps, mapActionToProps)(withRouter(Carrello));
