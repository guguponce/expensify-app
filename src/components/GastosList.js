import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import getVisibleGastos from "../selectors/gastos"
import {removeGasto} from "../actions/gastos"
import GastoIndividual from "./GastoIndividual"
import GastosListFiltros from "./GastosListFiltros"


const GastosList=(props)=>(
  <div>
    <h2 id="gastos-list-title">Lista de Gastos:</h2>
    <GastosListFiltros {...props.filtros} />
    <div id="gastos-list-container">
      {(props.gastosVisibles.length === 0 && props.gastos.length > 0) ? 
        (<h3 className="no-gastos-text">No hay gastos dentro de los filtros aplicados.</h3>)
        : null}
      {props.gastos.length === 0 ?
        (<h3 className="no-gastos-text">No Hay gastos realizados.</h3>)
        : (props.gastosVisibles.map(item=>{
          return (
          <div  className="gasto-individual-container" key={item.id}>
            <GastoIndividual {...item} />
            <Link to={`/edit/${item.id}`}>Edit</Link>
            <button id={item.id}
              className="btn btn-danger"
              onClick={(e)=>{
                props.dispatch(removeGasto(item.id))
            }}
              >Remove</button>
          </div>
        )}))}
    </div>
  </div>)

  // props y data que pasaremos a GastosList
  const mapStateToProps=(state)=>{
    return {
      gastos: state.gastos,
      gastosVisibles: getVisibleGastos(state.gastos, state.filtros),
      filtros: state.filtros
    }
  }

  export default connect(mapStateToProps)(GastosList)
