import React from 'react';
import { connect } from 'react-redux';
import moment  from 'moment';
import 'react-dates/initialize'
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css"
// import { v4 as uuidv4 } from 'uuid';



class GastosForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    name: props.gastoAEditarProp ? props.gastoAEditarProp.name : "",
    description: props.gastoAEditarProp ? props.gastoAEditarProp.description : "",
    amount: props.gastoAEditarProp ? (props.gastoAEditarProp.amount).toString() : 0,
    createdAt: props.gastoAEditarProp ? moment(props.gastoAEditarProp.createdAt) : moment(),
    calendarFocused: false,
    // id: uuidv4(),
    errorSubmitting: false
  }}

  submitGasto=(e)=>{
    e.preventDefault();

    if (!this.state.name || !this.state.amount){
      this.setState(state=>({errorSubmitting: true}))
    }else{
      this.setState(state=>({errorSubmitting: false}))

      this.props.onSubmitGasto(
      {name: this.state.name,
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        })
      }

  }
  onChangeName=(e)=>{
    const name = e.target.value;
    this.setState((state)=>{
      return ({ name })
    })}
  onChangeDescription=(e)=>{
    const description=e.target.value
    this.setState((state)=>({ description }))}
  onChangeAmount=(e)=>{
    let amount = e.target.value;
    amount.match(/^(\d)+(\.\d{0,2})?$/) ?
    this.setState((state)=>({ amount }))
    : null
    }

  render(){
    return (
  <div>
    <h2>Form</h2>
      <form onSubmit={this.submitGasto}>
        {/* NAME */}
        <label htmlFor="form-name">Name:</label><br />
        <input  type="text"
          id="form-name"
          autoFocus
          value={this.state.name}
          onChange={this.onChangeName}/><br />
        {/* DESCRIPTION */}
        <label htmlFor="form-description">Description:</label><br />
        <input type="textarea"
          id="form-description"
          value={this.state.description}
          placeholder="(optional)"
          onChange={this.onChangeDescription}/><br />
        {/* AMOUNT */}
        <label htmlFor="form-amount">Amount</label><br />
        <input  type="number"
          id="form-amount"
          step={0.01}
          value={this.state.amount}
          placeholder="0"
          onChange={this.onChangeAmount}/><br />
        {/* CREATED AT */}
        <label htmlFor="form-createdAt">Created at:</label><br />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={date => date ? this.setState({ createdAt: date }) : null}
          focused={this.state.calendarFocused}
          onFocusChange={({ focused }) => this.setState({ calendarFocused: focused })}
          id="form-createdAt"
          numberOfMonths={1}
          isOutsideRange={()=>false}
        /><br/>

        {this.state.errorSubmitting && <p id="error-message">Please insert a name and an amount.</p>}
        <button type="submit"
          className="btn btn-primary"
          >Submit</button>
      </form>
  </div>
)}}

export default GastosForm
