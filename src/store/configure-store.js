import { createStore, combineReducers } from 'redux';

import gastosReducer from "../reducers/gastos";
import filtrosReducer from "../reducers/filtros";

export default ()=>{
  const store = createStore(
  combineReducers({
    gastos: gastosReducer,
    filtros: filtrosReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

  return store
}
