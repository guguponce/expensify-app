import React from 'react';
import { createRoot } from 'react-dom/client';
//REACT-ROUTER
import { useLocation } from "react-router-dom"
import { history } from "./routers/AppRouter"
//
import AppRouter from './routers/AppRouter.js';
// REDUX
import { Provider } from 'react-redux';
import storeDeclaration from "./store/configure-store"
import getVisibleGastos from "./selectors/gastos"
import { startAddGasto, removeGasto, editGasto, startGetGastos } from './actions/gastos'
import { editFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filtros'
import moment from 'moment';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./styles/styles.scss"
//FIREBASE
import { getAuth, onAuthStateChanged } from "firebase/auth";

const store = storeDeclaration()
//
// store.dispatch(startAddGasto({name: "Water", amount: 100, createdAt: moment().add(1,"days").valueOf()}))
// store.dispatch(startAddGasto({name: "Gas", amount: 80, createdAt: moment().subtract(3,"days").valueOf()}))
// store.dispatch(startAddGasto({name: "Electricity", description: "Abonado en cuotas", amount: 700, createdAt: moment().valueOf()}))

const currentState = store.getState()
const visibleGastos = getVisibleGastos(currentState.gastos, currentState.filtros)


const container = document.getElementById("root")
const htmlRoot = createRoot(container);
htmlRoot.render(
  <h1>Coming soon...</h1>
)
// store.dispatch(startGetGastos()).then(() => {
// htmlRoot.render(
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>);
// })

let alreadyRendered = false;
const renderApp=()=>{
  if(!alreadyRendered){
    htmlRoot.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>);
    alreadyRendered = true
  }
}

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(startGetGastos()).then(() => {
      renderApp()
    })
    console.log("login");
    if(history.location.pathname === "/"){
    history.push("/dashboard")}
  }else{
      renderApp()
      console.log("logout");
      history.push("/")
  }
})
