// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";

import "firebase/auth";
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAGtPfgaQLlpgOAjR6albv6jsuTzV7u6-c",
    authDomain: "dateroulette-5e108.firebaseapp.com",
    projectId: "dateroulette-5e108",
    storageBucket: "dateroulette-5e108.appspot.com",
    messagingSenderId: "1056563138856",
    appId: "1:1056563138856:web:d3dc7a6dc6dd87801c401d",
    measurementId: "G-N9RCJFB6Y1",
  })
  .auth();
