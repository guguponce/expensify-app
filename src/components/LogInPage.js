import React, {useState} from 'react';
import { connect } from 'react-redux';
import { startLogInGoogle, startLogInEmail, startLogInTwitter } from "../actions/auth"
import { useNavigate, useLocation } from "react-router-dom"
import LoginModal from "./LoginModal"


const LogIn = (props)=>{
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [emailToAuth, setEmailtoAuth] = useState("augustojponce@outlook.com");
  const onYesLogin=()=>{
    console.log("maybe")
    props.startLogInEmail(emailToAuth);
    // setOpenLogin(false)
  }
  return (
    <div id="login-container">
      <div id="login-box">
        <div id="login-section">
          <div id="login-section-center">
            <h2>Empieza a cuidar tus gastos</h2>
            <button onClick={props.startLogInGoogle}
              className="login-button">Log In with Google Account</button>
            <button
              onClick={props.startLogInTwitter}
              className="login-button">Log In with Twitter Account</button>
            {/* {!!openLoginModal &&
              <LoginModal
                wantToLogin={openLoginModal}
                onLogin={(email)=>{
                  "maybe?"
                  props.startLogInEmail(email)}}
              setOpenLogin={(boolean)=>{setOpenLoginModal(boolean)}}
            />} */}
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
  startLogInGoogle: ()=>dispatch(startLogInGoogle()),
  startLogInTwitter: ()=>dispatch(startLogInTwitter()),
  })


export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
