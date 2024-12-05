"use client";
import { useAuth } from "@/app/services/auth";

export const UserCard = () => {
  const user = useAuth();

  console.log(user || "Empty", new Date().toLocaleDateString());

  if (!user) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return <div>{user.email}</div>;
};
