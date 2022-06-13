import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import getVisibleGastos from "../selectors/gastos"
import {startRemoveGasto} from "../actions/gastos"
import GastoIndividual from "./GastoIndividual"
import GastosListFiltros from "./GastosListFiltros"
import Summary from "./Summary"


const GastosList=(props)=>(
  <div>
    <h2 id="gastos-list-title">Lista de Gastos:</h2>
    <div className="filtros-total-container">
      <GastosListFiltros {...props.filtros} />
      <div id="total-gastos-container">
        <h3>Total filtrado:</h3>
        <h4>{`$${props.gastosVisibles.reduce(
          (total, item)=> total + item.amount, 0)}`}</h4>
      </div>
    </div>
    <div id="gastos-list-container">
      {(props.gastosVisibles.length === 0 && props.gastos.length > 0) ?
        (<h3 className="no-gastos-text">No hay gastos dentro de los filtros aplicados.</h3>)
        : null}
      {props.gastos.length === 0 ?
        (<h3 className="no-gastos-text">No Hay gastos realizados.</h3>)
        : (props.gastosVisibles.map((item,index)=>{
          return (
          <div  className="gasto-individual-container" key={index}>
            <GastoIndividual {...item} />
            <div className="edit-remove-container">
              <button id={item.id}
                className="btn btn-danger"
                onClick={(e)=>{
                  props.dispatch(startRemoveGasto(item.id))
                }}
                >Remove</button>
            <Link to={`/edit/${item.id}`}><button className="edit-btn btn btn-primary">Edit</button></Link>
          </div>
          </div>
        )}))}
    </div>
    {props.gastos.length && <Summary gastos={props.gastos}/>}
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
