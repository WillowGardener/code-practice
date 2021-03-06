import React, {useState} from 'react'
import {Input, Button} from '@material-ui/core'
import {db, auth} from '../firebase'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function SendMessage() {
    const [message, setMessage] = useState("")

    async function sendMessage(e){
        e.preventDefault()
        const {uid, photoURL,displayName} = auth.currentUser
        console.log(auth.currentUser.displayName)
        await db.collection('messages').add({
            text: message,
            photoURL,
            displayName,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessage('')
    }
    return (
        <div>
            <form className="text-form" onSubmit={sendMessage}>
                <textarea className= "text-input" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="type here..." />
                <Button className="send-button" type="submit">Send</Button>
            </form>
        </div>
    )
}

export default SendMessage
