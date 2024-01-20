"use client";

import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

const SignoutButton = () => {
  return (
    <Button
      variant="destructive"
      className="hover:bg-[#FEDBC5] hover:text-black"
      onClick={() => {
        signOut();
        toast.success("Successfully Logged Out", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "white",
            secondary: "#713200",
          },
        });
      }}
    >
      Logout
    </Button>
  );
};

export default SignoutButton;
