// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcNg8UdSW6h9kWv3IDrdZ2JVtge_Tb16A",
  authDomain: "myecom-677ed.firebaseapp.com",
  projectId: "myecom-677ed",
  storageBucket: "myecom-677ed.firebasestorage.app",
  messagingSenderId: "763265805477",
  appId: "1:763265805477:web:672bb818a11b8e1d5cf14c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export {auth, fireDB}