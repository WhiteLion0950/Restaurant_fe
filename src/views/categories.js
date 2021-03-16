import React from 'react'
import CardLoadingSection from "../common/cards/cardLoadingSection"
import AlertCustom from "../common/alert/alert"
import {fetchCategories} from './functions/api'
import {
    Row,
    Col,
    
} from 'react-bootstrap'
import Card from "../common/cards/card"
import{withRouter} from "react-router-dom"

class Categories extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isLoading:false,
            isError:false,
            data:[]
        }
        this.fetchData = this.fetchData.bind(this) //bind alla funzione
                                   
    }
 componentDidMount(){
     this.fetchData()
 }
         fetchData(){ //la invoco per reperire i dati quando viene creato il componente a cui servono i dati
          //settare lo state
          this.setState({ //mettere il primo stato loading a true
              isLoading :true
          })
          fetchCategories() //nel caso sia positivo (ritorna array con le categorie )allora
          .then (categories => {
             this.setState({
                 data: categories
             })
          })
          //catchare (caso in cui c'è l'errore)
          .catch(err => {
              this.setState({
                  isError :true
              })
          })
          //ultima callback della promise (fine promise) non passa nessun parametro non arriva nulla
          .finally(()=> {
              this.setState({
                  isLoading: false //non sta più in loading
              })
          })
         }
    

    

    render(){
        return(
            <>
            { //stati per definire il caricamento
                this.state.isLoading ? (
                    <CardLoadingSection />
                )
                //: //(<p>non sto più caricando</p>) mostrato alla fine del caricamento
                
                : this.state.isError ? (
                    <AlertCustom />
                )

                : this.state.data ? (
                <Row>{
                    this.state.data.map((current,idx)=>{
                        return(
                            
                                <Col md={4} key={"card_loading_"+idx}>
                                    <Card
                                    urlImg={current.images[0].uri}
                                        title={current.title}
                                        subTitle={current.subtitle}
                                        description={current.description}
                                        key={'cardIndex'+idx}
                                    />

                                </Col>
                            
                        )
                    })
                   } </Row>
                )

                : null

            }
            </>
      )
    }
}
export default withRouter(Categories);