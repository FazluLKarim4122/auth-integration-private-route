// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy-8AoYIB3gT5TmqCkl2Nx0NXc8lcOHG0",
  authDomain: "auth-integration-private-72cb2.firebaseapp.com",
  projectId: "auth-integration-private-72cb2",
  storageBucket: "auth-integration-private-72cb2.appspot.com",
  messagingSenderId: "190724596839",
  appId: "1:190724596839:web:3d55a4540c6a82571720c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;