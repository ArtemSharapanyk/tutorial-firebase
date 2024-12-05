"use client";
import { registerUser } from "@/app/services/auth";
import { useState } from "react";

export const CreateUserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = await registerUser(email, password);
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={handleEmailChange}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
