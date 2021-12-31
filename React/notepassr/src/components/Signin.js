import React from 'react'
// import {Button} from 'material-ui/core'
import {auth} from '../firebase.js'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {Input, Button} from '@material-ui/core'

function Signin() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div>
            <Button onClick={signInWithGoogle}>Sign In with Google</Button>
        </div>
    )
}

export default Signin
