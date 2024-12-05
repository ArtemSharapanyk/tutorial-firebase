"use client";
import {
  createUserWithEmailAndPassword,
  getAuth as getFirebaseAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../config/firebase";
import { useEffect, useState } from "react";

interface User {
  email: string;
  refreshToken: string;
  accessToken: string;
}

export const getAuth = () => {
  return getFirebaseAuth(app);
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (userFromFirebase) => {
      if (userFromFirebase) {
        setUser({
          email: userFromFirebase.email || "",
          //   accessToken: userFromFirebase.stsTokenManager.accessToken,
          //   refreshToken: userFromFirebase.stsTokenManager.refreshToken,
        } as User);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export const registerUser = async (email: string, password: string) => {
  const firebaseAuthObject = getAuth();
  try {
    const response = await createUserWithEmailAndPassword(
      firebaseAuthObject,
      email,
      password
    );
    return response.user;
  } catch (error) {
    console.log(error);
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const firebaseAuthObject = getAuth();
    const candidate = await signInWithEmailAndPassword(
      firebaseAuthObject,
      email,
      password
    );
    return candidate.user;
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = async () => {
  try {
    const firebaseAuthObject = getAuth();
    await firebaseAuthObject.signOut();
  } catch (error) {
    console.log(error);
  }
};
