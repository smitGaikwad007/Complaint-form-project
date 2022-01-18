import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  
    apiKey: "AIzaSyBL9nfzSM2jFd48ZwUQpCLHCZAxdfF0Zlc",
    authDomain: "complaint-form-e3e58.firebaseapp.com",
    projectId: "complaint-form-e3e58",
    storageBucket: "complaint-form-e3e58.appspot.com",
    messagingSenderId: "748004256660",
    appId: "1:748004256660:web:b15f29efb064192d027d81"
  
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

