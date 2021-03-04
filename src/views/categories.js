import React from 'react'

class Categories extends React.Component{
    constructor(props){
        super(props);
         this.state ={
             data=null
         }
    }

    componentDidMount(){
        //quando il component viene creato entra direttamente qua
        fetch("https://a5c15a50208a.ngrok.io/categories",{mode: "no-cors"})
         //invochiamo una promise in get (json con i dati api)
         .then(data => data.json()) //stampiamo quello che ci da data esito positivo promise
        .then(data => {
            this.setState ({
                data: data.categories
            })
        })
         
         .catch(err =>{
             console.log(err);//promise errore
         })
    }

    render(){
         return(
             <>
             {this.state.data && this.state.data.map(curr=> (
                 <p>
                     {curr.sisle}
                 </p>
             ))}
             <p>ciao mondo</p>
             </>
            )
    }
}

export default Categories;