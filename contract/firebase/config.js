import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF7aB5ltYw-ythYFbenKNzpknOjgNG8sA",
  authDomain: "fir-em-d9fec.firebaseapp.com",
  projectId: "fir-em-d9fec",
  storageBucket: "fir-em-d9fec.appspot.com",
  messagingSenderId: "803284618412",
  appId: "1:803284618412:web:e71daf41581998fa906309"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
