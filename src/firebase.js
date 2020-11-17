import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDxezrkqMcbRQIZx2Ilmfj0h98vUUVFjGc",
    authDomain: "twitter-clone-a36eb.firebaseapp.com",
    databaseURL: "https://twitter-clone-a36eb.firebaseio.com",
    projectId: "twitter-clone-a36eb",
    storageBucket: "twitter-clone-a36eb.appspot.com",
    messagingSenderId: "78925219399",
    appId: "1:78925219399:web:e56ed4dfa14dbd495c1362",
    measurementId: "G-HWHTQ3X19Z"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  export default db;