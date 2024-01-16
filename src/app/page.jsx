import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";

import { Arvo } from "next/font/google";
import Image from "next/image";

const arvo = Arvo({ weight: "400", subsets: ["latin"] });

export default async function Home() {
  const session = await getServerSession();
  return (
    <div className="">
      <Navbar />
      <Image
        src="/bg6.jpg"
        alt="bg_image"
        height={1080}
        width={1920}
        className="absolute bottom-0 md:bottom-[-180px]"
      />
      <div className="h-dvh flex justify-center items-center flex-col">
        <h1
          className={`text-5xl z-10 absolute top-[240px] md:top-[120px] md:left-[100px] ${arvo.className}`}
        >
          HIKARI
        </h1>
        <div className="z-10">
          <p
            className=" text-center font-bold p-4 mt-[-30px] md:mt-0 md:p-3 md:absolute md:top-[165px] md:left-[92px] text-xl"
            style={{ fontFamily: "Rubik", fontWeight: 700 }}
          >
            Maximize productivity with minimal effort using our task solution
          </p>
        </div>
        <div className="z-10">
          {session ? (
            <Button
              className="md:absolute md:left-[95px] md:top-[220px] h-[40px]"
              size="lg"
            >
              You are logged in
            </Button>
          ) : (
            <Button
              className="md:absolute md:ml-[85px] md:left-3 md:top-[220px] h-[40px]"
              size="lg"
            >
              Login above to get Started
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
