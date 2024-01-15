"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-sky-500 h-screen flex justify-center items-center">
        <h1 className="text-5xl">LANDING PAGE</h1>
      </div>
    </>
  );
}
