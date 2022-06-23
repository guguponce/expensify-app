import React from 'react';
import { startAddGasto } from "../actions/gastos"
import { Link, useNavigate, useMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import GastosForm from './GastosForm';


const AddExpensePage=(props)=>{
  let navigate = useNavigate()
  return (
  <div id="add-container">
    <div id="add-box">
      <h2>Agrega un nuevo gasto:</h2>
      <GastosForm
        onSubmitGasto={(submittedGasto)=>{
          props.dispatch(startAddGasto(submittedGasto))
          setTimeout(()=>{navigate("/dashboard")},2000)
        }}/>
    </div>
  </div>
)};

const mapStateToProps=(state)=>(
  {
    gastos: state.gastos
  })

export default connect(mapStateToProps)(AddExpensePage)
