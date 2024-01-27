import ThemeSwitch from "@/components/ThemeSwitch";
import UserSignupForm from "@/components/UserSignupForm";
import Link from "next/link";

const signup = () => {
  return (
    <>
      <div className="absolute right-0 p-6 bg-[#FEDBC5] dark:bg-black dark:text-[#da9c78]">
        <ThemeSwitch />
      </div>
      <div>
        <div className="flex text-5xl md:text-7xl font-[Oswald] justify-center  h-[60px]">
          <p className=" pt-[110px] md:pt-[140px] tracking-[5px] select-none dark:text-[#da9c78]">
            SIGN UP
          </p>
        </div>
        <div className="flex justify-center items-center h-screen dark:text-[#da9c78]">
          <UserSignupForm />
          <div className="text-md flex w-[300px] justify-center  absolute bottom-[75px] md:bottom-[110px]">
            Have an account?&nbsp;&nbsp;
            <Link href="/auth/signin" className="font-bold cursor-pointer ">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;
