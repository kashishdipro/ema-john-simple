// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  // apiKey: "AIzaSyCNxc5VwuXaEkmgLUwfNTSHTdJiTgPZyY8",
  // authDomain: "ema-jhon-simple-f2df0.firebaseapp.com",
  // projectId: "ema-jhon-simple-f2df0",
  // storageBucket: "ema-jhon-simple-f2df0.appspot.com",
  // messagingSenderId: "361384105823",
  // appId: "1:361384105823:web:69fb8925d7e1aecde608ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// apiKey: process.env.REACT_APP_apiKey,
// authDomain: process.env.REACT_APP_authDomain,
// projectId: process.env.REACT_APP_projectId,
// storageBucket: process.env.REACT_APP_storageBucket,
// messagingSenderId: process.env.REACT_APP_messagingSenderId,
// appId: process.env.REACT_APP_appId,