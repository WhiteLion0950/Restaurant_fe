import { ADD_PRODUCT, DECREMENT_COUNTER, INCREMENT_COUNTER,REMOVE_PRODUCT,SET_COUNTER,ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET } from "./actionTypes";

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

export const addProductToBasket= (qnt, product)=>({
    type: ADD_PRODUCT_TO_BASKET,
    payload:{qnt, product}
})

export const removeProductFromBasket = (qnt, id)=>({
    type:REMOVE_PRODUCT_FROM_BASKET,
    payload:{qnt, id}
})