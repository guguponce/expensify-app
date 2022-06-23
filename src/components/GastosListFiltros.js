import React from 'react';
import { connect } from 'react-redux'
import { editFilterText, setStartDate, setEndDate, sortByDate, sortByAmount } from "../actions/filtros"
import { DateRangePicker } from "react-dates";
// import 'react-dates/initialize'
import "react-dates/lib/css/_datepicker.css"


class GastosListFiltros extends React.Component{
    state = {
      focusedInput: undefined,
    }
  onChangeRangeDates=({ startDate, endDate }) =>{
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  render(){
  return (
  <div className="gastos-filtros-container">
    {/* <div className="type-filter-container"> */}
      <div className="filtro-type">
      <label>Filtro por texto:</label>
      <input type="text"
        value={this.props.text}
        onChange={(e)=>{this.props.dispatch(editFilterText(e.target.value))}}
      />
      </div>


    {/* </div> */}

    {/* <div className="type-filter-container"> */}
    <div className="filtro-type ">
      <label>Filtro por fechas:</label>
      <DateRangePicker
        startDate={this.props.filtros.startDate} // momentPropTypes.momentObj or null,
        startDateId="start_date_id" // PropTypes.string.isRequired,
        endDate={this.props.filtros.endDate} // momentPropTypes.momentObj or null,
        endDateId="end_date_id" // PropTypes.string.isRequired,
        onDatesChange={this.onChangeRangeDates} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput =>{this.setState((state)=>({ focusedInput: focusedInput }))}}
        numberOfMonths={1}
        isOutsideRange={()=>false}
        showClearDates={true} // PropTypes.func.isRequired,
      />
      </div>

    {/* </div> */}
      <div className="filtro-type">
        <label>Ordenar por:</label>
        <select onChange={(e)=>{e.target.value=="amount"? this.props.dispatch(sortByAmount()) : this.props.dispatch(sortByDate())}}>
          <option value="date">Fecha</option>
          <option value="amount">Monto</option>
        </select>
      </div>
  </div>
)}
}

const mapStateToProps = (state)=>(
  {
    filtros: state.filtros
  }
)

export default connect(mapStateToProps)(GastosListFiltros)
