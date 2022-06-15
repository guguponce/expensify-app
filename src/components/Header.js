import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogOut } from "../actions/auth"
import { connect } from 'react-redux';

const Header=(props)=>{
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
      |
      <button
        className="btn btn-default btn-default"
        onClick={props.startLogOut}>Log Out</button>
    </nav>

  </div>)
}

const mapDispatchToProps = (dispatch)=>({
  startLogOut: ()=>dispatch(startLogOut())
})

export default connect(undefined, mapDispatchToProps)(Header)
