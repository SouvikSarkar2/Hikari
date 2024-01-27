"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Loader from "./Loader/Loader";
import toast from "react-hot-toast";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();
  console.log("Session from Navbar: ", session);
  console.log("status from Navbar :", status);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="h-14 flex justify-between items-center p-3 top-0 absolute w-full bg-[#FEDBC5] z-10">
      {session ? (
        <>
          <Button
            variant="destructive"
            className="hover:bg-[#FEDBC5] hover:text-black select-none"
            onClick={() => {
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
              setTimeout(() => {
                signOut();
              }, 1000);
            }}
          >
            Logout
          </Button>
          <Link href="/tasks">
            <Button
              className="bg-[#2E102A] hover:bg-[#FEDBC5] hover:text-black select-none"
              onClick={(isLoading) => setIsLoading(!isLoading)}
            ></Button>
          </Link>
        </>
      ) : (
        <Button onClick={() => signIn()} className="bg-[#2E102A] select-none">
          Login
        </Button>
      )}
    </div>
  );
};

export default Navbar;
