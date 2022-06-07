import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './routers/AppRouter.js';
// REDUX
import { Provider } from 'react-redux';
import storeDeclaration from "./store/configure-store"
import getVisibleGastos from "./selectors/gastos"
import { addGasto, removeGasto, editGasto } from './actions/gastos'
import { editFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filtros'
import moment from 'moment';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./styles/styles.scss"

const store = storeDeclaration()

// store.dispatch(addGasto({name: "Water", amount: 100, createdAt: moment().add(1,"days").valueOf()}))
// store.dispatch(addGasto({name: "Gas", amount: 80, createdAt: moment().subtract(3,"days").valueOf()}))
// store.dispatch(addGasto({name: "Electricity", amount: 700, createdAt: moment().valueOf()}))

const currentState = store.getState()
const visibleGastos = getVisibleGastos(currentState.gastos, currentState.filtros)

const container = document.getElementById("root")
const htmlRoot = createRoot(container);
htmlRoot.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>);
