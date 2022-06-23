import React from 'react';
import { connect } from 'react-redux';
import { startLogIn } from "../actions/auth"
import { useNavigate, useLocation } from "react-router-dom"


const LogIn = (props)=>{
  return (
    <div id="login-container">
      <div id="login-box">
        <div id="login-section">
          <div id="login-section-center">
            <h2>Empieza a cuidar tus gastos</h2>
            <button onClick={props.startLogIn} id="login-button" className="btn btn-primary">Log In</button>
          </div>
      </div>
      <div id="alcancia-img"></div>
      </div>
    </div>
  )
}

const mapStateToProps=(state)=>({
  isAuthenticated: !!state.auth.uid
})

const mapDispatchToProps=(dispatch)=>({
  startLogIn: ()=>dispatch(startLogIn()),
  })


export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
