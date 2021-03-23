import { ADD_PRODUCT, DECREMENT_COUNTER, INCREMENT_COUNTER, REMOVE_PRODUCT, SET_COUNTER } from "./actionTypes";

const initialState = {
    counter: 0,
    basket: []
}
export default function(state=initialState, action){
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
}