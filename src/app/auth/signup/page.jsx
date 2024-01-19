import UserSignupForm from "@/components/UserSignupForm";
import Link from "next/link";

const signup = () => {
  return (
    <div>
      <div className="flex text-5xl md:text-7xl font-[Oswald] justify-center  h-[60px]">
        <p className=" pt-[110px] md:pt-[180px] tracking-[5px]">SIGN UP</p>
      </div>
      <div className="flex justify-center items-center h-screen">
        <UserSignupForm />
        <div className="text-md flex w-[300px] justify-center  absolute bottom-[75px] md:bottom-[110px]">
          Have an account?&nbsp;&nbsp;
          <Link href="/auth/signin" className="font-bold">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default signup;
