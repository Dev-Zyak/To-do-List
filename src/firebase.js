import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu6LfKIW2gYBQHeEX13TEYs55O42PTeuU",
  authDomain: "todolist-6b884.firebaseapp.com",
  databaseURL: "https://todolist-6b884.firebaseio.com",
  projectId: "todolist-6b884",
  storageBucket: "todolist-6b884.appspot.com",
  messagingSenderId: "863941563225",
  appId: "1:863941563225:web:3a1191173d7cf5e6da7248",
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const fb = firebase;
