import React from 'react';
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
// componentes
import Dashboard from "../components/Dashboard.js";
import Header from "../components/Header.js";
import AddExpensePage from "../components/AddExpensePage.js";
import EditExpensePage from "../components/EditExpensePage.js";
import NoMatch from "../components/NoMatch";
import HelpPage from "../components/HelpPage.js";
import LogInPage from "../components/LogInPage.js";
import PrivateRoute from "./PrivateRoutes"
import LogInAccess from "./PublicRoutes"

export const history = createBrowserHistory()

const AppRouter=()=>(
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
         <Route
           path="/"
           element={<LogInAccess component={LogInPage} />}
           exact={true} />
         <Route
           path="dashboard"
           element={<PrivateRoute component={Dashboard} />} exact={true} />
         <Route
           path="create"
           element={<PrivateRoute component={AddExpensePage} />} exact={true} />
         <Route
           path="edit/:gastoId"
           element={<PrivateRoute component={EditExpensePage} />} exact={true} />
         {/* <Route path="/help" element={<HelpPage />}  exact={true} /> */}
         <Route path="*" element={<NoMatch />} />
       </Routes>
     </div>
   </BrowserRouter>
)
 export default AppRouter;
