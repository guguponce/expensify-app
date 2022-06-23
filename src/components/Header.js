import React, { useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { startLogOut } from "../actions/auth"
import { connect } from 'react-redux';

const Header=(props)=>{
  const navigate = useNavigate()
  const location = useLocation();
  useEffect(() => {
 if(!props.isAuthenticated){
   document.getElementById("navbar").style = "width: auto"
 }
})
  const activeClassName = "active-navlink"
  return (
  <header>
  <div id="navbar-container">
    <div id="logo" onClick={()=>{navigate("/")}}></div>
    <nav id="navbar">
      {location.pathname === "/create" && <NavLink
        to="/"
        id="gohome-button"
        className={({ isActive })=> isActive? activeClassName : undefined}
        className="rojo"
        ><h5>Home</h5></NavLink>}
      {props.isAuthenticated && location.pathname === "/dashboard" && <NavLink
        to="/create"
        className={({ isActive })=> isActive? activeClassName : undefined}
        className="rojo"
        ><button id="add-button-navbar">Agregar nuevo gasto</button></NavLink>}
      {/* |
      <NavLink
        to="/help"
        className={({ isActive })=> isActive? activeClassName : undefined}>Help</NavLink> */}
      {props.isAuthenticated && (<span>|</span>)}
      {props.isAuthenticated && (
      <button
        id="btn-logout"
        onClick={props.startLogOut}>Log Out</button>)}
      {!props.isAuthenticated && (
      <button
        id="btn-login"
        onClick={props.startLogIn}>Log In</button>)}
    </nav>

  </div>
</header>  )
}

const mapStateToProps=(state)=>({
  isAuthenticated: !!state.auth.uid
})

const mapDispatchToProps = (dispatch)=>({
  startLogOut: ()=>dispatch(startLogOut()),
  startLogIn: ()=>dispatch(startLogIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
