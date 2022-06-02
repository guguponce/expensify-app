import filtrosReducer from "../reducers/filtros";
import moment from "moment";

const defaultFiltros = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
}

test("should set up default filtros", ()=>{
  const state = filtrosReducer(undefined, {type: "@@INIT"})
  expect(state).toEqual(defaultFiltros)
})

test("should set up filter to sort by amount", ()=>{
  const amountFiltro = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  }

  const state = filtrosReducer(defaultFiltros, {type: "SORT_AMOUNT"})
  expect(state).toEqual(amountFiltro)
})


test("should set up filter to sort by date", ()=>{
  const dateFiltro = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  }

  const state = filtrosReducer(defaultFiltros, {type: "SORT_DATE"})
  expect(state).toEqual(dateFiltro)
})

test("should set up filter to filter text", ()=>{
  const amountFiltro = {
    text: "caja",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  }

  const state = filtrosReducer(defaultFiltros, {type: "EDIT_FILTER_TEXT", text: "caja"})
  expect(state).toEqual(amountFiltro)
})


test("should set up filter to filter start date", ()=>{
  const amountFiltro = {
    text: "",
    sortBy: "date",
    startDate: moment(0).add(4, "days"),
    endDate: moment().endOf("month")
  }

  const state = filtrosReducer(defaultFiltros, {type: "SET_START_DATE", startDate: moment(0).add(4, "days")})
  expect(state).toEqual(amountFiltro)
})

test("should set up filter to filter end date", ()=>{
  const amountFiltro = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment(0).add(4, "days")
  }

  const state = filtrosReducer(defaultFiltros, {type: "SET_END_DATE", endDate: moment(0).add(4, "days")})
  expect(state).toEqual(amountFiltro)
})
