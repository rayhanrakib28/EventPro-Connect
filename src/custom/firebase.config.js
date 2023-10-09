// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIFJI_lL8kA-cMcSOgngzxRvpw5bIH9Y4",
    authDomain: "event-management-ph.firebaseapp.com",
    projectId: "event-management-ph",
    storageBucket: "event-management-ph.appspot.com",
    messagingSenderId: "924194933430",
    appId: "1:924194933430:web:07d38627d6563ae8ebb417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;