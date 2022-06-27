import React, {useState} from 'react';

const LoginModal = ({ wantToLogin, onLogin, setOpenLogin }) =>{
  const [emailToAuth, setEmailtoAuth] = useState("augustojponce@outlook.com")
  const onYesLogin=(e)=>{
    e.preventDefault();
    onLogin(emailToAuth);
    // setOpenLogin(false)
  }
  // const onCloseModal=()=>{
  //   setOpenLogin(false)
  // }

  if(!wantToLogin){return null}
  return (
    <div
      className="overlay"
      // onClick={onCloseModal}
      >
      <div className="modal-container"
        onClick={()=>null}>
        <p
          className="x-modal-btn"
          // onClick={onCloseModal}
          >X</p>
          <div className="modal-content"
            // onClick={()=>null}
            >
            <h1>¿Quieres accdeder con correo electrónico?</h1>
            <div
              className="correo-form-container">
              <form>
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={emailToAuth}
                  onChange={e=>setEmailtoAuth(e.target.value)}></input>
                <button
                  type="submit"
                  className="btn-email-login"
                  onClick={onYesLogin}>Log in</button>
              </form>
            </div>
        </div>
      </div>
    </div>
    )
}

export default LoginModal
