export const fetchCategories =() =>{
    //fetch per recuperare i dati, dopo l'url posso passare altri parametri
    
    return fetch('https://f49ac3f9c1fe.ngrok.io/api/categories')
    .then(responce=> { //risposta che arriverà dal server e controllare che sia uno stato positivo dal 200-299
        if(responce.ok){
            return responce.json() //risposta in json è una callback
        }
        else{
          throw new Error("Errore") //messaggio di errore se la risposta non è ok
        }

    })
}