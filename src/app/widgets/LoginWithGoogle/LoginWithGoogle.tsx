"use client";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";

export const LoginWithGoogle = () => {
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const user = await signInWithPopup(getAuth(), provider);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return <button onClick={handleLoginWithGoogle}>Login with google</button>;
};
