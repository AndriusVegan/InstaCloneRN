// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// above is a new way firebase 9.0.0
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD29UQvo32nt1lVqIV5YW75fXudZZx0V4M",
  authDomain: "insta-clone-26c40.firebaseapp.com",
  projectId: "insta-clone-26c40",
  storageBucket: "insta-clone-26c40.appspot.com",
  messagingSenderId: "304524874189",
  appId: "1:304524874189:web:9c3e559ef2ef9f61ca3484",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
