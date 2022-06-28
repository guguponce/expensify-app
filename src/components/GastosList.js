import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import getVisibleGastos from "../selectors/gastos"
import {startRemoveGasto} from "../actions/gastos"
import GastoIndividual from "./GastoIndividual"
import GastosListFiltros from "./GastosListFiltros"
import Modal from "./Modal"
import Summary from "./Summary"


const GastosList=(props)=>{
  const [openModal, setOpenModal] = useState(false)

  return (<div id="dashboard-container">
    <div id="dashboard-box">
    <h2 id="gastos-list-title">Lista de Gastos:</h2>
    <div className="filtros-total-container">
      <GastosListFiltros {...props.filtros} />
      <div id="total-gastos-container">
        <h3>Total filtrado:</h3>
        <h4>{`$${props.gastosVisibles.reduce(
          (total, item)=> total + item.amount, 0)}`}</h4>
        <p>en {props.gastosVisibles.length} de {props.gastos.length} gastos.</p>
      </div>
    </div>
    <div id="gastos-list-container">
      {(props.gastosVisibles.length === 0 && props.gastos.length > 0) ?
        (<h3 className="no-gastos-text">No hay gastos dentro de los filtros aplicados.</h3>)
        : null}
      {props.gastos.length === 0 ?
        (<h3 className="no-gastos-text">No hay gastos realizados.</h3>)
        : (props.gastosVisibles.map((item,index)=>{
          return (
          <div className="gasto-individual-container background-white" key={index}>
            <GastoIndividual {...item} />
            <div className="edit-remove-container">
              <button id={item.id}
                className="btn-negative"
                onClick={()=>{setOpenModal(true)}}
                >Remove</button>
                {!!openModal &&
                  <Modal
                    wantToDelete={openModal}
                    onDelete={()=>{
                  props.dispatch(startRemoveGasto(item.id)) }}
                  setOpen={(boolean)=>{setOpenModal(boolean)}} />}
            <Link to={`/edit/${item.id}`}><button className="edit-btn btn-positive">Edit</button></Link>
          </div>
          </div>
        )}))}
    </div>
    {!!props.gastos.length ? <Summary gastos={props.gastos}/> : null}
  </div>
</div>)}

  // props y data que pasaremos a GastosList
  const mapStateToProps=(state)=>{
    return {
      gastos: state.gastos,
      gastosVisibles: getVisibleGastos(state.gastos, state.filtros),
      filtros: state.filtros
    }
  }

  export default connect(mapStateToProps)(GastosList)
