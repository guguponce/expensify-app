import React from 'react';
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";

// componentes
import Dashboard from "../components/Dashboard.js";
import Header from "../components/Header.js";
import AddExpensePage from "../components/AddExpensePage.js";
import EditExpensePage from "../components/EditExpensePage.js";
import NoMatch from "../components/NoMatch";
import HelpPage from "../components/HelpPage.js";


const AppRouter=()=>(
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
         <Route path="/" element={<Dashboard />} exact={true} />
         <Route path="/create" element={<AddExpensePage />} />
         <Route path="/edit/:gastoId" element={<EditExpensePage />} />
         <Route path="/edit" element={<EditExpensePage />} />
         <Route path="/help" element={<HelpPage />} />
         <Route path="*" element={<NoMatch />} />
       </Routes>
     </div>
   </BrowserRouter>
)
 export default AppRouter;
