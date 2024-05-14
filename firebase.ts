/* import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCetub6d6ZMWVdzkAUMPubCyF_08KCdoTo",
  authDomain: "df-sync.firebaseapp.com",
  projectId: "df-sync",
  storageBucket: "df-sync.appspot.com",
  messagingSenderId: "847948362561",
  appId: "1:847948362561:web:4be30d7eadd4d491c727c0",
  measurementId: "G-W2HGV0F94V"
};

// Initialize Firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore()

//collection ref
const colRef = collection(db, 'analysis')

//get collection data
console.log("Attempting to fetch documents...");
getDocs(colRef)
  .then((snapshot) => {
    if (snapshot.empty) {
      console.log("No matching documents.");
    } else {
      snapshot.docs.forEach(doc => {
        console.log(doc.id, "=>", doc.data());
      });
    }
  })
  .catch(err => {
    console.error("Error fetching documents: ", err);
  }); */

  // lib/firebase.ts
  
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCetub6d6ZMWVdzkAUMPubCyF_08KCdoTo",
  authDomain: "df-sync.firebaseapp.com",
  projectId: "df-sync",
  storageBucket: "df-sync.appspot.com",
  messagingSenderId: "847948362561",
  appId: "1:847948362561:web:4be30d7eadd4d491c727c0",
  measurementId: "G-W2HGV0F94V"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
