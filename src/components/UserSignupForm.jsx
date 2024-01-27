"use client";

import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { addUser } from "@/lib/actions";

const UserSignupForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!data.password || !data.repeatPassword || !data.username) {
        throw new Error("Please Provide Credentials");
      }
      if (data.password !== data.repeatPassword) {
        throw new Error("Password mismatch");
      }

      const res = await addUser({
        username: data.username,
        password: data.password,
      });
      if (res) {
        const err = res.error;
        throw new Error(err);
      }
      router.push("/auth/signin");
    } catch (error) {
      setError(error?.message);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col mb-[100px] gap-3 w-[280px] md:w-[450px] "
        onSubmit={handleSubmit}
      >
        <p className="font-[Oswald] text-xl select-none">Username</p>
        <Input
          type="text"
          name="username"
          placeholder="username"
          className="bg-white dark:bg-[#413934] dark:placeholder:text-white"
          value={data.username}
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
        />
        <p className="font-[Oswald] text-xl select-none">Password</p>
        <Input
          type="password"
          name="password"
          placeholder="password"
          className="bg-white dark:bg-[#413934] dark:placeholder:text-white"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <p className="font-[Oswald] text-xl select-none">Repeat Password</p>
        <Input
          type="password"
          name="repeatPassword"
          placeholder="password again"
          className="bg-white dark:bg-[#413934] dark:placeholder:text-white"
          value={data.repeatPassword}
          onChange={(e) => {
            setData({ ...data, repeatPassword: e.target.value });
          }}
        />
        <Button className="bg-black text-white dark:bg-[#da9c78] dark:text-black">
          Signup
        </Button>
        <p className="flex justify-center text-red-500 text-lg ">{error}</p>
      </form>
    </div>
  );
};

export default UserSignupForm;
