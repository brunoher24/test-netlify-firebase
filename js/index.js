
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI8MTp6T1K29d5E9A3SRVsxyrxAGd-wFA",
  authDomain: "test-71aec.firebaseapp.com",
  projectId: "test-71aec",
  storageBucket: "test-71aec.appspot.com",
  messagingSenderId: "881012926313",
  appId: "1:881012926313:web:60ae92daaa3ca9e051bff8",
  measurementId: "G-KQ9JG8EQ7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


