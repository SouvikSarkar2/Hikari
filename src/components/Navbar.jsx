"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="h-14 flex justify-between items-center p-3">
      {session ? (
        <>
          <button onClick={() => signOut()}>Logout</button>
          <Link href="/tasks">Dashboard</Link>
        </>
      ) : (
        <button onClick={() => signIn()}>Login</button>
      )}
    </div>
  );
};

export default Navbar;
