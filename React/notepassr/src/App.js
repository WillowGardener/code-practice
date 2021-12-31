import './App.css';
import Signin from './components/Signin';
import Chat from './components/Chat';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase/app'

function App() {
  const [user] = useAuthState(auth)
  return (
    
    <div className="app">
      {user ? <Chat /> : <Signin />}
      
      
    </div>
    
  );
}

export default App;


