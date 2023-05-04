// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcotkJuyzdEuG994REVrY8CA0EkDKiTxc",
  authDomain: "web-assignment10.firebaseapp.com",
  projectId: "web-assignment10",
  storageBucket: "web-assignment10.appspot.com",
  messagingSenderId: "274226407197",
  appId: "1:274226407197:web:bdd7ce3e59ccc30459a3f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;