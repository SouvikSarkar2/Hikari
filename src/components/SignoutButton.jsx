"use client";

import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

const SignoutButton = () => {
  return (
    <Button
      variant="destructive"
      className="hover:bg-[#FEDBC5] hover:text-black"
      onClick={() => signOut()}
    >
      Logout
    </Button>
  );
};

export default SignoutButton;
