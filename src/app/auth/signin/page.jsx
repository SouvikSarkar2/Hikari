"use client";

import GithubButton from "@/components/GithubButton";
import GoogleButton from "@/components/GoogleButton";
import Loader from "@/components/Loader/Loader";
import UserSigninForm from "@/components/UserSigninForm";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleGithubSignin() {
    setIsLoading(true);
    await signIn("github", {
      callbackUrl: "/tasks",
    });
  }

  async function handleGoogleSignin() {
    setIsLoading(true);
    await signIn("google", {
      callbackUrl: "https://hikari-dusky.vercel.app/tasks",
    });
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="flex text-5xl md:text-7xl font-[Oswald] justify-center  h-[120px]">
        <p className=" pt-[100px] md:pt-[180px] tracking-[5px]">SIGN IN</p>
      </div>
      <div className="flex justify-center items-center h-[600px] md:h-[800px]">
        <div className=" w-[250px] rounded-3xl flex flex-col gap-[10px] items-center md:gap-[10px]">
          <div className=" flex gap-2">
            <GithubButton handleGithubSignin={handleGithubSignin} />
            <GoogleButton handleGoogleSignin={handleGoogleSignin} />
          </div>
          <span className="flex align-middle items-center gap-1.5 md:gap-2 md:py-3">
            <hr className="h-[5px] w-[120px] md:w-[200px] my-2 bg-black" />
            <p className="gont-[Oswald] text-[15px] md:text-[20px] font-bold">
              OR
            </p>
            <hr className="h-[5px] w-[120px] md:w-[200px] my-2 bg-black" />
          </span>
          <UserSigninForm />
          <div className="text-md flex w-[300px] justify-center  items-end  absolute  bottom-8">
            Dont have an account?&nbsp;&nbsp;
            <Link href="/auth/signup" className="font-bold cursor-pointer">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
