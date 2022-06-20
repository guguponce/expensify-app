import React, { useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { startLogOut } from "../actions/auth"
import { connect } from 'react-redux';

const Header=(props)=>{
  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
 //   if(props.isAuthenticated && location.pathname === "/"){
 //     console.log("true");
 //     navigate("/dashboard")
 //   }else if(props.isAuthenticated === false && location.pathname !== "/"){
 //     console.log("false");
 //     navigate("/")
 //   }

 // console.log(document.getElementById("navbar"))
 if(!props.isAuthenticated){
   document.getElementById("navbar").style = "width: auto"
 }
})
  const activeClassName = "active-navlink"
  return (
  <div id="navbar-container">
    <h1>Routing Website</h1>
    <nav id="navbar">
      <NavLink
        to="/"
        id="gohome-button"
        className={({ isActive })=> isActive? activeClassName : undefined}
        ><h5>Go Home!</h5></NavLink>
      {props.isAuthenticated && (<span>|</span>)}
      {props.isAuthenticated && (
      <NavLink
        to="/create"
        className={({ isActive })=> isActive? activeClassName : undefined}><h5>Add</h5></NavLink>)}
      {/* |
      <NavLink
        to="/help"
        className={({ isActive })=> isActive? activeClassName : undefined}>Help</NavLink> */}
      {props.isAuthenticated && (<span>|</span>)}
      {props.isAuthenticated && (
      <button
        className="btn btn-danger"
        onClick={props.startLogOut}>Log Out</button>)}
    </nav>

  </div>)
}

const mapStateToProps=(state)=>({
  isAuthenticated: !!state.auth.uid
})

const mapDispatchToProps = (dispatch)=>({
  startLogOut: ()=>dispatch(startLogOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
