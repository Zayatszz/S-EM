import { auth } from './config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

// Sign up function
export const signup = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    throw error;
  }
};



export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  Cookies.remove('userToken', { secure: true, sameSite: 'strict' }); // Ensure to clean up the cookie on logout
  console.log("logging out");
  return signOut(auth); // Sign out from Firebase auth
};
