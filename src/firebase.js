import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore"

// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTB4C4cr1YzTASxosH7sRc1-Fq--5lgcE",
  authDomain: "photofolio-83099.firebaseapp.com",
  projectId: "photofolio-83099",
  storageBucket: "photofolio-83099.appspot.com",
  messagingSenderId: "764594745599",
  appId: "1:764594745599:web:09628dde671f1c853e1cca"
};


const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const firestore = firebase.firestore();
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
