import React from 'react';
import {addGasto} from "../actions/gastos"
import { Link, useNavigate, useMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import GastosForm from './GastosForm';


const AddExpensePage=(props)=>{
  let navigate = useNavigate()
  return (
  <div>
    <h2>Add expenses</h2>
    <GastosForm
      onSubmitGasto={(submittedGasto)=>{
        props.dispatch(addGasto(submittedGasto))
        setTimeout(()=>{navigate("/")},2000)
      }}/>
  </div>
)};

const mapStateToProps=(state)=>(
  {
    gastos: state.gastos
  })

export default connect(mapStateToProps)(AddExpensePage)
