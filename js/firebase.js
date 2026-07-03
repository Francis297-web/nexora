this? // Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCsCx5tAT7h9HFXe85zmf9kOeZ5lavHO9U",

  authDomain: "nexora-technologies-71f47.firebaseapp.com",

  projectId: "nexora-technologies-71f47",

  storageBucket: "nexora-technologies-71f47.firebasestorage.app",

  messagingSenderId: "30045419538",

  appId: "1:30045419538:web:923086b0013381b98a80cb",

  measurementId: "G-81CW62YY73"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
