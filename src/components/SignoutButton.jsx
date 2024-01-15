"use client";

import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const SignoutButton = () => {
  return <button onClick={() => signOut()}>Logout</button>;
};

export default SignoutButton;
