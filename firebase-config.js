// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBkEkxNzk8fMX58wBP4-SuSiHLMTLriTBg",
  authDomain: "furiax-e97b9.firebaseapp.com",
  projectId: "furiax-e97b9",
  storageBucket: "furiax-e97b9.firebasestorage.app",
  messagingSenderId: "702420390922",
  appId: "1:702420390922:web:e9ba13bccdb3ada2497bf3",
  measurementId: "G-6051M5W7WM"
};

// Aqui é obrigatório chamar:
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();