"use client";

import GithubButton from "@/components/GithubButton";
import GoogleButton from "@/components/GoogleButton";
import UserAddForm from "@/components/UserAddForm";
import { signIn, signOut, useSession } from "next-auth/react";

const signin = () => {
  async function handleGithubSignin() {
    await signIn("github", { callbackUrl: "http://localhost:3000" });
  }

  async function handleGoogleSignin() {
    await signIn("google", { callbackUrl: "http://localhost:3000" });
  }
  return (
    <div
      className="flex justify-center items-center h-screen  "
      style={{ backgroundImage: "/bg8.jpg" }}
    >
      <div className="h-[250px] w-[250px] bg-[red] rounded-3xl flex flex-col gap-[10px] items-center md:gap-[10px]">
        <GithubButton handleGithubSignin={handleGithubSignin} />
        <GoogleButton handleGoogleSignin={handleGoogleSignin} />
        <UserAddForm />
      </div>
    </div>
  );
};

export default signin;
