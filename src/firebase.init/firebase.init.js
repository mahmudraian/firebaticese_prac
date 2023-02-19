// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCypo6ZC0me4OwlG9Xq4k-ZlWM4XLUVw7Y",
  authDomain: "fir-authentication-b1370.firebaseapp.com",
  projectId: "fir-authentication-b1370",
  storageBucket: "fir-authentication-b1370.appspot.com",
  messagingSenderId: "345280037644",
  appId: "1:345280037644:web:4ea5ca7c4fae2fe8a03f29",
  measurementId: "G-MMGJ304MWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;