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
import { login, logout } from './actions/auth'
import moment from 'moment';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./styles/styles.scss"
//FIREBASE
import { getAuth, onAuthStateChanged } from "firebase/auth";

const store = storeDeclaration()
const currentState = store.getState()
const visibleGastos = getVisibleGastos(currentState.gastos, currentState.filtros)


const container = document.getElementById("root")
const htmlRoot = createRoot(container);
htmlRoot.render(
  <div id="loading-container">
    <div id="loading-box">
      <h1>Starting</h1>
      <img src="/images/loading.gif" />
    </div>
  </div>
)
// store.dispatch(startGetGastos()).then(() => {
// htmlRoot.render(
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>);
// })
//
//

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
    store.dispatch(login(user.uid))
    store.dispatch(startGetGastos()).then(() => {
      renderApp()
    })
    // if(history.location.pathname === "/"){
    // history.push("/dashboard")}
  }else{
      store.dispatch(logout())
      renderApp()
  }
})
