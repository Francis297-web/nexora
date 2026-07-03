// ===================================================
// NEXORA TECHNOLOGIES - FIREBASE CONFIGURATION
// ===================================================

// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

// Firebase Configuration
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

// Initialize Firebase Services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Services
export {
    app,
    analytics,
    auth,
    db,
    storage
};
