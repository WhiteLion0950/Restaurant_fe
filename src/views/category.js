import React from "react";
import { withRouter } from "react-router-dom";
import { fetchCategory } from "./functions/api";
import { CardProducts } from "../common/cards/cardProduct";
import { CardLoadingSection } from "../common/cards/cardLoadingSection";
import { AlertCustom } from "../common/alert/alert";
import { Row, Col } from "react-bootstrap";
import { addProduct, removeProduct } from "../redux/actions";
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
                return (
                  <Col md={3} key={`card_${idx}`}>
                    <CardProducts
                      title={curr.title}
                      subtitle={curr.subtitle}
                      description={curr.description}
                      image={curr.images[0].uri}
                      id={idx}
                      buttonText= {this.props.basket.find(x=>x.id==curr.id)?"Rimuovi dal Carrello":"Aggiungi al Carrello"}
                      callback={()=>{
                        if(this.props.basket.find(x=>x.id==curr.id)){
                          this.props.removeProduct(curr.id)
                        }else{
                          this.props.addProduct(curr)
                        }
                      }
                     
                      }
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
const mapActionToProps={
  addProduct: product=>addProduct(product),
  removeProduct: product=>removeProduct(product)
}
const mapStateToProps = state=>({
  basket: state.basket
})

export default connect(mapStateToProps,mapActionToProps) (withRouter(Category));
