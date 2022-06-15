import { googleAuthProvider } from '../firebase/firebase';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom"

const navigate = useNavigate()
const auth = getAuth();
export const startLogIn=()=>{
  return ()=>{
    console.log("startLogin started");
    return signInWithPopup(auth, googleAuthProvider).then((result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("authentication")
      navigate("/dashboard")
    }).catch((err)=>{
      console.log(err);
    })
  }
}

export const startLogOut=()=>{
  return ()=>{
    signOut(auth).then(()=>{
      console.log("You're out");
    })
  }
}
