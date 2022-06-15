import React from 'react';
import { connect } from 'react-redux';
import { startLogIn } from "../actions/auth"


const LogIn = (props)=>{
  return (
    <div id="login-container">
      <h2>Please log in to start the app</h2>
      {/* <form id='login-form'> */}
        {/* <label>Username/Email:</label><br />
        <input type="email" /><br />
        <label>Password:</label><br />
        <input type="password" /><br /> */}
        <button onClick={props.startLogIn} id="login-button" className="btn btn-primary">Log In</button>
      {/* </form> */}

    </div>
  )
}

const mapDispatchToProps=(dispatch)=>({
  startLogIn: ()=>dispatch(startLogIn()),
  })


export default connect(undefined, mapDispatchToProps)(LogIn)
