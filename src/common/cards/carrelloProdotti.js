import { faMinusCircle, faPlusCircle,faEuroSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { addProductToBasket, removeProductFromBasket } from '../../redux/actions'
import{connect} from 'react-redux'
import{withRouter} from'react-router-dom';


const Carrello=(props)=>(
    
    <div className="boxTable" align="center">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" className="thTab">Prodotti</th>
                    <th scope="col" className="thTab">Quantità</th>
                    <th scope="col" className="thTab">Prezzo Singolo</th>
                </tr>
            </thead>
            <tbody>
                {props.basket.map((curr,idx)=>(
                    <tr key={`${idx}`}>
                        <td className="thTab">{curr.product.title}</td>
                        <td>
                            <FontAwesomeIcon onClick={()=>{props.removeProductFromBasket(1,curr.product.id)}} icon={faMinusCircle}/>
                            {curr.qnt}
                            <FontAwesomeIcon onClick={()=>{props.addProductToBasket(1,curr.product)}} icon={faPlusCircle}/>
                        </td>
                        <td className="thTab">{curr.product.price}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th className="thTab">
                        Totale : <FontAwesomeIcon icon={faEuroSign}/>{props.basket.reduce((acc,curr)=>acc+(curr.qnt*curr.product.price),0)}
                    </th>
                </tr>
            </tfoot>
        </table>
    </div>
);

const mapActionToProps={
    addProductToBasket:(qnt,product)=>addProductToBasket(qnt,product),
    removeProductFromBasket:(qnt, id)=>removeProductFromBasket(qnt,id)
}
const mapStateToProps=state=>({
    basket:state.basket
})
export default connect(mapStateToProps,mapActionToProps)(withRouter(Carrello));