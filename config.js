import firebase from 'firebase';
 
var firebaseConfig = {
    apiKey: "AIzaSyDLOQjSWZkT_-dY7mq5FSy_aafhEGDJmuw",
    authDomain: "school-attendance-app-216a8.firebaseapp.com",
    databaseURL: "https://school-attendance-app-216a8-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-216a8",
    storageBucket: "school-attendance-app-216a8.appspot.com",
    messagingSenderId: "40535973075",
    appId: "1:40535973075:web:d1b0127e8ba41a38174826"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();