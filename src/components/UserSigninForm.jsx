"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

const UserSigninForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      if (!data.password || !data.username) {
        throw new Error("Please Provide Credentials");
      }
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (res.error) {
        const err = res.error;
        throw new Error(err);
      }
      router.push("/tasks");
    } catch (error) {
      console.log(error);
      setError(error?.message);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col mb-[100px] gap-3 w-[280px] md:w-[450px] "
        onSubmit={loginUser}
      >
        <p className="font-[Oswald] text-xl">Username</p>
        <Input
          type="text"
          name="username"
          placeholder="username"
          className="bg-white"
          value={data.username}
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
        />
        <p className="font-[Oswald] text-xl">Password</p>
        <Input
          type="password"
          name="password"
          placeholder="password"
          className="bg-white"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <Button>Signin</Button>
        <p className="flex justify-center text-red-500 text-lg ">{error}</p>
      </form>
    </div>
  );
};

export default UserSigninForm;
