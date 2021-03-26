import React from "react";
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

class Category extends React.Component {
  constructor(props) {
    super(props); //per la classe react component
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      isLoading: false,
      isError: false,
      data: null,
      id: this.props.match.params.id,
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.setState({
      isLoading: true,
    });
    fetchCategory(this.state.id)
      .then((categories) => {
        this.setState({
          data: categories,
        });
      })
      .catch((err) => {
        this.setState({
          isError: true,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
        console.log(this.state.data);
      });
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <CardLoadingSection />
        ) : this.state.isError ? (
          <AlertCustom />
        ) : this.state.data ? (
          <>
            <img src={this.state.data.images[0].uri} className="heroCategory" />
            <Row>
              {this.state.data.products.map((curr, idx) => {
                const quantity = this.props.basket.find(
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
                      goToDetails={()=>this.props.history.push(`/details/${curr.id}`)}
                      price={curr.price}
                      qnt={quantity !== undefined ? quantity.qnt : 0}
                      //buttonText= {this.props.basket.find(x=>x.id==curr.id)?"Rimuovi dal Carrello":"Aggiungi al Carrello"}
                      addProductToBasket={() => {
                        this.props.addProductToBasket(1, curr);
                      }}
                      removeProductFromBasket={() => {
                        this.props.removeProductFromBasket(1, curr.id);
                      }}
                      callback={() => {
                        if (this.props.basket.find((x) => x.id == curr.id)) {
                          this.props.removeProduct(curr.id);
                        } else {
                          this.props.addProduct(curr);
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
}
const mapActionToProps = {
  addProductToBasket: (qnt, product) => addProductToBasket(qnt, product),
  removeProductFromBasket: (qnt, id) => removeProductFromBasket(qnt, id),
};
const mapStateToProps = (state) => ({
  basket: state.basket,
});

export default connect(mapStateToProps, mapActionToProps)(withRouter(Category));
