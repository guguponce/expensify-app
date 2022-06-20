import { googleAuthProvider } from '../firebase/firebase';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
// import { history } from "./routers/AppRouter"

const auth = getAuth();

export const login = (uid)=>({
  type: "LOGIN",
  uid
})

export const startLogIn=()=>{
  return ()=>{
    return signInWithPopup(auth, googleAuthProvider).then((result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // history.push("/dashboard")
    }).catch((err)=>{
      console.log(err);
    })
  }
}

export const logout=()=>({
  type: "LOGOUT"
})

export const startLogOut=()=>{
  return ()=>{
    signOut(auth).then(()=>{
      console.log("You're out");
    })
  }
}
