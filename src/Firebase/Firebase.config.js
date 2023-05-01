// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK4jeQA9ajkvxjJ41tlx60Dw1pyhl25yI",
  authDomain: "chef-recipe-hunter-22ef1.firebaseapp.com",
  projectId: "chef-recipe-hunter-22ef1",
  storageBucket: "chef-recipe-hunter-22ef1.appspot.com",
  messagingSenderId: "393181451883",
  appId: "1:393181451883:web:dc41fd9b5fedc2a0ddc32e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;