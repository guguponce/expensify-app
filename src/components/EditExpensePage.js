import React, { useState } from 'react';
import { startRemoveGasto, startEditGasto } from '../actions/gastos';
import { sortByAmount } from '../actions/filtros';
import { useNavigate, useParams } from 'react-router';
import { connect } from 'react-redux';
import GastosForm from './GastosForm';
import Modal from "./Modal"


const EditExpensePage=(props)=>{
  const [openModal, setOpenModal] = useState(false)

  const navigate = useNavigate();
  const {gastoId}=useParams()

  const gastoAEditar = props.gastos.find((item)=>item.id===gastoId)

  return (
  <div id="edit-container">
    <div id="edit-box">
    <h2>Edit the expense: {gastoAEditar.name}</h2>
    <GastosForm
      gastoAEditarProp={gastoAEditar}
      onSubmitGasto={(submittedGasto)=>{
        props.dispatch(startEditGasto(gastoId, submittedGasto))
        setTimeout(()=>{navigate("/dashboard")},2000)
      }}
    />
    <button id={gastoId}
      className="btn btn-danger btn-negative btn-edit-remove"
      onClick={()=>{setOpenModal(true)}}
      >Remove</button>
      {!!openModal &&
        <Modal
          wantToDelete={openModal}
          onDelete={()=>{
            navigate("/")
            props.dispatch(startRemoveGasto(gastoId)) }}
        setOpen={(boolean)=>{setOpenModal(boolean)}}
      />}
  </div>
  </div>
)};

const mapStateToProps=(state)=>{
  return ({
  gastos: state.gastos,

})}

export default connect(mapStateToProps)(EditExpensePage);




// import React from 'react';
// import { removeGasto, editGasto } from '../actions/gastos';
// import { useNavigate, useParams } from 'react-router';
// import { connect } from 'react-redux';
// import GastosForm from './GastosForm';
//
//
// const EditExpensePage=(props)=>{
//   const navigate = useNavigate();
//   const gastoAEditar = props.gastoToEdit
//   console.log("gastos a editar",gastoAEditar)
//   return (
//   <div>
//     <h2>Edit the expense: {props.gastoToEdit.name}</h2>
//     <GastosForm
//       gastoAEditarProp={props.gastoToEdit}
//       onSubmitGasto={(submittedGasto)=>{
//         props.dispatch(removeGasto(gastoAEditar.id))
//         console.log(gastoAEditar);
//         console.log(submittedGasto)
//         setTimeout(()=>{navigate("/")},2000)
//       }}
//     />
//     {/* {setTimeout(()=>{navigate("/")},2000)} */}
//   </div>
// )};
//
// const mapStateToProps=(state)=>{
//   console.log(useParams())
//   const {gastoId}=useParams()
//   return ({
//   // gastos: state.gastos,
//   gastoToEdit: state.gastos.find((item)=>item.id===gastoId)
//
// })}
//
// export default connect(mapStateToProps)(EditExpensePage);
