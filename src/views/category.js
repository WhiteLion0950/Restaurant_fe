import React,{useState, useEffect}  from "react";
import { withRouter } from "react-router-dom";
import { fetchCategory } from "./functions/api";
import { CardProducts } from "../common/cards/cardProduct";
import { CardLoadingSection } from "../common/cards/cardLoadingSection";
import { AlertCustom } from "../common/alert/alert";
import { Row, Col } from "react-bootstrap";
import {
  addProduct,
  removeProduct,
  addProductToBasket,
  removeProductFromBasket,
} from "../redux/actions";
import { connect } from "react-redux";
import {FetchData} from"../hooks/fetchDataHooks"
const Category = (props) => {
  const {isLoading, isError, data} = FetchData(()=> fetchCategory(props.match.params.id));
  
  return (
    <>
      {isLoading &&
        <CardLoadingSection />}
      { isError &&
        <AlertCustom />}
      { data ? (
        <>
          <img src={data.images[0].uri} className="heroCategory" />
          <Row>
            {data.products.map((curr, idx) => {
              const quantity = props.basket && props.basket.find(
                (x) => x.product.id === curr.id
              );
              return (
                <Col md={3} key={`card_${idx}`}>
                  <CardProducts
                    title={curr.title}
                    subtitle={curr.subtitle}
                    description={curr.description}
                    image={curr.images[0].uri}
                    id={idx}
                    goToDetails={()=>props.history.push(`/details/${curr.id}`)}
                    price={curr.price}
                    qnt={quantity !== undefined ? quantity.qnt : 0}
                    //buttonText= {this.props.basket.find(x=>x.id==curr.id)?"Rimuovi dal Carrello":"Aggiungi al Carrello"}
                    addProductToBasket={() => {
                      props.addProductToBasket(1, curr);
                    }}
                    removeProductFromBasket={() => {
                      props.removeProductFromBasket(1, curr.id);
                    }}
                    callback={() => {
                      if (props.basket.find((x) => x.id == curr.id)) {
                        props.removeProduct(curr.id);
                      } else {
                        props.addProduct(curr);
                      }
                    }}
                  />
                </Col>
              );
            })}
          </Row>
        </>
      ) : null}
    </>
  );
}



const mapActionToProps = {
  addProductToBasket: (qnt, product) => addProductToBasket(qnt, product),
  removeProductFromBasket: (qnt, id) => removeProductFromBasket(qnt, id),
};
const mapStateToProps = (state) => ({
  basket: state.basket,
});

export default connect(mapStateToProps, mapActionToProps) (withRouter(Category));
