import React, {useState, useEffect} from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import Signout from './Signout'

function Chat() {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(100).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        }) 
    }, [])
    return (
        <div className="chat">
            <header>
                <h1>NotePassr</h1>
                <Signout />
            </header>
            <div className="chat-box">
                {messages.map(({ id,text,photoURL,uid,displayName }) => (
                    <div className="message">
                        <div key={id} className={`message ${uid === auth.currentUser ? 'sent': 'received'}`}>
                            <img src={photoURL} alt="profile pic" />
                            <div className="text-container">
                                <h4>{displayName}</h4>
                                <p className="message-text">{text}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <SendMessage />
            </div>
        </div>
    )
}

export default Chat
