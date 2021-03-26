import React from "react";
import { withRouter } from "react-router-dom";
import { fetchDettaglioProdotti } from "../../views/functions/api";
import {CardDettaglioProdotti} from '../cards/cardDettaglioProdotti';
import { CardLoadingSection } from "./cardLoadingSection";
import { AlertCustom } from "../alert/alert";
import { connect } from "react-redux";
import CardDetails from './cardDettaglioProdotti'

class Details extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading:false,
            error:false,
            data:null
        }
        this.fetchDettaglioProdotti=this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData();
   }
   fetchData() {
    this.setState({
      isLoading: true,
    });
    fetchDettaglioProdotti(this.props.match.params.id)
      .then((prodotto) => {
        this.setState({
          data: prodotto,
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
  render(){
      return(
          <div>
              {this.state.isLoading ? (
          <CardLoadingSection />
        ) : this.state.isError ? (
          <AlertCustom />
        ) : this.state.data ? (
            <>
            <div className="lablecalorie">
            <h1>{this.state.data.title}</h1>
            <img src={this.state.data.images[0].uri}className="imgCalorie"/>
            </div>
            <CardDetails
            kcal={this.state.data.kcal}
             carboidrati={this.state.data.macros.carbohydrates}
             proteine={this.state.data.macros.wheys}
             grassi={this.state.data.macros.fats}
             />
             </>
        ) : null}   
          </div>
      )
  }
 }
 export default (withRouter(Details));