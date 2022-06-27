import { googleAuthProvider, twitterAuthProvider } from '../firebase/firebase';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, TwitterAuthProvider, sendSignInLinkToEmail } from "firebase/auth";
// import { history } from "./routers/AppRouter"

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'localhost:3000',
  // This must be true.
  handleCodeInApp: true
};

const auth = getAuth();

export const login = (uid)=>({
  type: "LOGIN",
  uid
})

export const startLogInGoogle=()=>{
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

export const startLogInTwitter=()=>{
  return ()=>{
    console.log("start")
    return signInWithPopup(auth, twitterAuthProvider)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;
    console.log(result.user)

    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    console.log(error)
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });
  }
}
export const startLogInEmail=(email= "augustojponce@outlook.com")=>{
  return ()=>{
    return sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      console.log("enviado")
      alert("Tu link de acceso te espera en tu bandeja de correo.")
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
    return send
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
