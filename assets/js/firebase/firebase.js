// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_ZhRCfT_2JYh3sl_dibmdigq-Qihfw1c",
  authDomain: "prueba-firebase-79190.firebaseapp.com",
  projectId: "prueba-firebase-79190",
  storageBucket: "prueba-firebase-79190.appspot.com",
  messagingSenderId: "446367309066",
  appId: "1:446367309066:web:9772b304f18a88cc6d6ef3",
  measurementId: "G-1F3EY51YDL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

// Funciones del CRUD
export const createTask = (title, description) => addDoc(collection(db, "tasks"), {title, description});

export const getTask = id => getDoc(doc(db, "tasks", id));

export const onGetTask = (callback) => onSnapshot(collection(db, "tasks"), callback);

export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);

export const deleteTask = id => deleteDoc(doc(db, "tasks", id));