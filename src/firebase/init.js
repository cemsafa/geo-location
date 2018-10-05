import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyACR1SRivnNEhWvvwZ5RkhE4-TiPsAHDbI",
  authDomain: "auth-geolocation.firebaseapp.com",
  databaseURL: "https://auth-geolocation.firebaseio.com",
  projectId: "auth-geolocation",
  storageBucket: "auth-geolocation.appspot.com",
  messagingSenderId: "830797276006"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
