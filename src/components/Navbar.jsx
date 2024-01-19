"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Loader from "./Loader/Loader";

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
            className="hover:bg-[#FEDBC5] hover:text-black"
            onClick={() => signOut()}
          >
            Logout
          </Button>
          <Link href="/tasks">
            <Button
              className="bg-[#2E102A] hover:bg-[#FEDBC5] hover:text-black"
              onClick={(isLoading) => setIsLoading(!isLoading)}
            >
              Dashboard
            </Button>
          </Link>
        </>
      ) : (
        <Button onClick={() => signIn()} className="bg-[#2E102A]">
          Login
        </Button>
      )}
    </div>
  );
};

export default Navbar;
