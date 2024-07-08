import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnwd4oQvpz6rCxK-DkqEpn8L-Bf_v_pZU",
  authDomain: "shopify-application-11324.firebaseapp.com",
  projectId: "shopify-application-11324",
  storageBucket: "shopify-application-11324.appspot.com",
  messagingSenderId: "611155746922",
  appId: "1:611155746922:web:433e3dbf63dbf05f596a13"
};

const app = initializeApp(firebaseConfig);
export const authInfo = getAuth(app);
export const GoogleAuth = new GoogleAuthProvider;
export const storage = getFirestore(app);
