import React from 'react'
import {Pie} from 'react-chartjs-2';
import {Card as CardBootstrap} from 'react-bootstrap'

const CardDetails =(props)=>{
    console.log(props.kcal)
   return(
       <div className="dettaglioProdottiSezione">      
        <table className="tabellaValori">
            <tbody>
                <tr>Kcal: {props.kcal}</tr>
                <tr>Carboidrati: {props.carboidrati}</tr>
                <tr>Proteine: {props.proteine}</tr>
                <tr>Grassi: {props.grassi}</tr>
            </tbody>
        </table>
          <Pie
          data={{
              labels:[
                  'kcal',
                  'carboidrati',
                  'Proteine',
                  'Grassi',
                  
              ],
              datasets:[{
                  data:[props.kcal, props.carboidrati, props.proteine, props.grassi],
                  backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF9900'
                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF9900'
                    ]
              }]
          }}
          />
       </div>
   )
}
  export default CardDetails  








