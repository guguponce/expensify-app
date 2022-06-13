import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gastosReducer from "../reducers/gastos";
import filtrosReducer from "../reducers/filtros";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default ()=>{
  const store = createStore(
  combineReducers({
    gastos: gastosReducer,
    filtros: filtrosReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)

  return store
}
