import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA97ZZEgZtxCVT6iPcTVJhK5WFur6Svex8",
  authDomain: "offers-api-e1180.firebaseapp.com",
  databaseURL: "https://offers-api-e1180.firebaseio.com",
  projectId: "offers-api-e1180",
  storageBucket: "offers-api-e1180.appspot.com",
  messagingSenderId: "236765241022",
  appId: "1:236765241022:web:9600abaae0fa99088ac8ef",
  measurementId: "G-EC1QMGQPZ1"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;