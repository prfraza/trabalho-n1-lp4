import firebase from 'firebase';

 config = {
    apiKey: "AIzaSyCVJ-cDVYQwv-UcQeMAq49sYbNuLoMB-V0",
    authDomain: "task-manager-a11d4.firebaseapp.com",
    databaseURL: "https://task-manager-a11d4.firebaseio.com",
    projectId: "task-manager-a11d4",
    storageBucket: "task-manager-a11d4.appspot.com",
    messagingSenderId: "190614747384"
  };

  firebase.initializeApp(config);
  export default firebase.database();