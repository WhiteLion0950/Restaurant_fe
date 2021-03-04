import React from 'react'
import CardLoadingSection from "../common/cards/cardLoadingSection"
import {fetchCategories} from './functions/api'


class Categories extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isLoading:false,
            isError:false,
            data:[]
        }
        this.fetchData = this.fetchData.bind (this) //bind alla funzione
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
    

    componentDidMount(){ // metodo invocato quando il componente viene creato
        this.fetchData()
        
         
        
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
                    <p>ERRORE</p>
                )

                : this.state.data ? (
                   this.
                )

                : null

            }
            </>
      )
    }
}
export default Categories;