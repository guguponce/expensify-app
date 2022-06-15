import { googleAuthProvider } from '../firebase/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export const startLogIn=()=>{
  return ()=>{
    console.log("startLogin started");
    const auth = getAuth();
    return signInWithPopup(auth, googleAuthProvider).then((result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("authentication")
    }).catch((err)=>{
      console.log(err);
    })
  }
}
