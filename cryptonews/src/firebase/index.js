// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyIP1D9r8RQgSo6ypflkxp78SCqpFeXg0",
  authDomain: "final-year-project-f2fb9.firebaseapp.com",
  projectId: "final-year-project-f2fb9",
  storageBucket: "final-year-project-f2fb9.appspot.com",
  messagingSenderId: "1035660284773",
  appId: "1:1035660284773:web:176af23ca11e14653f878c",
  measurementId: "G-16NEZZEG6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
