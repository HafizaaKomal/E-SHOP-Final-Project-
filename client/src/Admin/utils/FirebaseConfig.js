
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDqHmVkJGCLhRDjn5e18FB7x4OYmEq7_FE",
    authDomain: "final-project-21476.firebaseapp.com",
    projectId: "final-project-21476",
    storageBucket: "final-project-21476.appspot.com",
    messagingSenderId: "143320325500",
    appId: "1:143320325500:web:8b1f70d80e9fe96e79d8f9",
    measurementId: "G-06WYL0RKM6"
  };

const app = initializeApp(firebaseConfig);
export const  storage = getStorage(app)