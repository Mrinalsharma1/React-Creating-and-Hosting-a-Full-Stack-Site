import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCXurrZGmT52hMBxbUwPvXiDCrkHgvyhAU",
  authDomain: "myreactblock.firebaseapp.com",
  projectId: "myreactblock",
  storageBucket: "myreactblock.appspot.com",
  messagingSenderId: "309400729041",
  appId: "1:309400729041:web:a52dd2d41eef831e8f1cf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
