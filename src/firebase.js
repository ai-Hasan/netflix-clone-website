import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCibr23DxjVpBkevkZUUtdDcXeya1CmF2k",
  authDomain: "netflix-clone-f2c44.firebaseapp.com",
  projectId: "netflix-clone-f2c44",
  storageBucket: "netflix-clone-f2c44.appspot.com",
  messagingSenderId: "263055439297",
  appId: "1:263055439297:web:a7d2b319b142cf419dab40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
