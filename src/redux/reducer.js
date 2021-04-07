import { ADD_PRODUCT, ADD_PRODUCT_TO_BASKET, DECREMENT_COUNTER, INCREMENT_COUNTER, REMOVE_PRODUCT, REMOVE_PRODUCT_FROM_BASKET, SET_COUNTER,DELETE_BASKET } from "./actionTypes";

const initialState = {
    counter: 0,
    basket: []
}
/*export default function(state=initialState, action){
    switch(action.type){
        case INCREMENT_COUNTER: 
        return {
            ...state,
            counter:state.counter +1
        }
        case DECREMENT_COUNTER:
            return{
                ...state,
                counter:state.counter - 1
            }
            case SET_COUNTER:
                return{
                    ...state,
                    counter:action.payload
                }
            case ADD_PRODUCT:
                return{
                    ...state,
                    basket:[
                        ...state.basket, 
                        action.payload
                    ]
                }
            case REMOVE_PRODUCT:
                return{
                    ...state,
                    basket:state.basket.filter(x=>x.id!=action.payload)
                }
            default: return state
    }
}*/


export default function(state :{basket:[]} = initialState, action){
    switch(action.type){
        case ADD_PRODUCT_TO_BASKET:
            return{
                ...state,
                basket: state.basket.find(x=> x.product.id === action.payload.product.id) ?
                 state.basket.reduce((acc, curr)=>{
                     if (curr.product.id===action.payload.product.id){
                         curr.qnt = curr.qnt + action.payload.qnt
                        }
                        acc.push(curr)
                        return acc
                 }, []) : [
                     ...state.basket,
                     action.payload
                 ]
            }
        case REMOVE_PRODUCT_FROM_BASKET:
            return{
                ...state,
                basket: state.basket.reduce((acc, curr)=> {
                    if (curr.product.id===action.payload.id){
                        if (curr.qnt >1){
                            curr.qnt = curr.qnt -1
                            acc.push(curr)
                        }
                    }else
                         acc.push(curr)

                         return acc
                }, [])
            }
            case DELETE_BASKET:
                return {
                    ...state,
                    basket: []
                }
          default:
              return state  
    }
}