// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMTz8qEc6a6CAtRit63FxgH62iBRmgKgw",
  authDomain: "mm2rb-2b0bb.firebaseapp.com",
  projectId: "mm2rb-2b0bb",
  storageBucket: "mm2rb-2b0bb.appspot.com",
  messagingSenderId: "335543025501",
  appId: "1:335543025501:web:9bd851dcada2ce57cfb2b4",
  measurementId: "G-3EY64C0VZW"
};
  
  firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();