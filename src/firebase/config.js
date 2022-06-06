import firebase from '@firebase/app-compat';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBMmZGJLJ07xSsD_jY5PMxcaqV5qQBVDfA",
  authDomain: "data-blog-ac040.firebaseapp.com",
  projectId: "data-blog-ac040",
  storageBucket: "data-blog-ac040.appspot.com",
  messagingSenderId: "988472332222",
  appId: "1:988472332222:web:9e6d1a11cd3ce8979433ef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp}