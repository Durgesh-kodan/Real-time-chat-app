// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBjOpsWlXD8Ca8d5uaSTlv8E7KYz3_yHS8",
  authDomain: "realchat-36aa2.firebaseapp.com",
  projectId: "realchat-36aa2",
  storageBucket: "realchat-36aa2.appspot.com",
  messagingSenderId: "806363936920",
  appId: "1:806363936920:web:8dd91d0a746e63282778ed",
  measurementId: "G-YD6Y4K0NJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };