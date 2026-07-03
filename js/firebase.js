// ======================================================
// NEXORA TECHNOLOGIES
// FIREBASE CONFIGURATION
// Version 5.0
// ======================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

const firebaseConfig = {

    apiKey: "AIzaSyCsCx5tAT7h9HFXe85zmf9kOeZ5lavHO9U",

    authDomain: "nexora-technologies-71f47.firebaseapp.com",

    projectId: "nexora-technologies-71f47",

    storageBucket: "nexora-technologies-71f47.firebasestorage.app",

    messagingSenderId: "30045419538",

    appId: "1:30045419538:web:923086b0013381b98a80cb",

    measurementId: "G-81CW62YY73"

};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

export {

    app,

    analytics,

    auth,

    db,

    storage

};
