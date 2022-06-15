import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQegImtLN2s-T1lRu_ZgsG89yX_Px3VP8",
    authDomain: "project-67-f41ea.firebaseapp.com",
    projectId: "project-67-f41ea",
    storageBucket: "project-67-f41ea.appspot.com",
    messagingSenderId: "794483281238",
    appId: "1:794483281238:web:c9442c045486b33d201af7"
  }; 
  
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();