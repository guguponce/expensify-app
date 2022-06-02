import React from 'react';
import { NavLink } from 'react-router-dom';


const Header=()=>{
  const activeClassName = "active-navlink"
  return (
  <div id="container">
    <h1>Routing Website</h1>
    <nav>
      <NavLink
        to="/"
        className={({ isActive })=> isActive? activeClassName : undefined}
        >Go Home!</NavLink>
      |
      <NavLink
        to="/create"
        className={({ isActive })=> isActive? activeClassName : undefined}>Add</NavLink>
      |
      <NavLink
        to="/help"
        className={({ isActive })=> isActive? activeClassName : undefined}>Help</NavLink>
    </nav>

  </div>)
}

export default Header;
