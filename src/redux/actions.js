import { ADD_PRODUCT, DECREMENT_COUNTER, INCREMENT_COUNTER,REMOVE_PRODUCT,SET_COUNTER } from "./actionTypes";

export const addCounter = ()=> ({
    type: INCREMENT_COUNTER
})
export const decrementCounter =()=> ({
    type: DECREMENT_COUNTER
})

export const setCounter = (value)=> ({
    type: SET_COUNTER,
    payload: value
})

export const addProduct =(product) =>({
    type: ADD_PRODUCT,
    payload: product
})

export const removeProduct =(product) =>({
    type: REMOVE_PRODUCT,
    payload: product
})