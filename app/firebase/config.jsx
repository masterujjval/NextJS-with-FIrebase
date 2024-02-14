
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}   from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDLakJA2913lao5-coYdNsgYOmhUdmqqUQ",
  authDomain: "cosmos-bc240.firebaseapp.com",
  projectId: "cosmos-bc240",
  storageBucket: "cosmos-bc240.appspot.com",
  messagingSenderId: "419815671214",
  appId: "1:419815671214:web:6f412f8affff60aaa6b43f",
  measurementId: "G-8H6FHT4ZME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth(app);
export default function(){(<>Dummy function</>)}