import {
  faMinusCircle,
  faPlusCircle,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FetchData } from "../../hooks/fetchDataHooks";
import { fetchOrders } from "../functions/api";
import CardLoadingSection from "../../common/cards/cardLoadingSection";
import { AlertCustom } from "../../common/alert/alert";

const Storico = (props) => {
  const { isLoading, isError, data } = FetchData(() => fetchOrders());

  return (
    <>
      {isLoading && <CardLoadingSection />}
      {isError && <AlertCustom />}
      {data ? (
        <>
          {data.map((current, idx) => {
            return (
              <div key={`orders_${idx}`}>
                <table className="table">
                  <thead>
                    <tr>
                   <th scope="col" className="thTab"> <h4>Id Ordine: {current.id}</h4></th>
                    <th scope="col" className="thTab"><h4>Prezzo Totale: €{current.price.toFixed(2)}</h4></th>
                    <th scope="col" className="thTab"><h4>Data dell'Ordine: {current.creation_date}</h4></th>
                    </tr>
                  </thead>
                  <tbody>
                  {current.data.map((curr, idx) => {
                    return (
                      <div key={`order_${idx}`}>
                        <td><h6>{curr.product.title}</h6></td>
                        <td><p>Quantità: {curr.qnt}</p></td>
                        
                      </div>
                    );
                    
                  })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </>
      ) : null}
    </>
  );
};
const mapStateToProps = (state) => ({
  basket: state.basket,
});
export default connect(mapStateToProps, null)(Storico);
