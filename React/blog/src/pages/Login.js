import React from "react"
import { auth, provider } from "../firebase-config"
import { signInWithPopup } from "firebase/auth"

function Login() {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result)=> {

        })
    }
    return <div className="login-page">
        <p>Sign in to continue:</p>
        <button className="login-with-google">Login with Google</button>
    </div>
}

export default Login;