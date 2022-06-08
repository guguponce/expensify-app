import React from 'react';

const Summary = (props)=>{
  const totalDinero = props.gastos.reduce((total, gasto)=>total+gasto.amount,0)
  const cantidadGastos = props.gastos.length
  return (
    <div id="summary-container">
        <h2 id="summary-text">Has pagado ${totalDinero} en un total de {cantidadGastos} gastos</h2>
    </div>
    )
}

export default Summary
