import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYILS_dIgl_P6Kv1qClfRir0LCPRzGmqY",
  authDomain: "notepassr.firebaseapp.com",
  projectId: "notepassr",
  storageBucket: "notepassr.appspot.com",
  messagingSenderId: "203613216965",
  appId: "1:203613216965:web:073b51e565989b63bc50ac",
  measurementId: "G-YN57YB9FBT"

})

const db = firebaseApp.firestore()

const auth = firebaseApp.auth()

export { auth, db }