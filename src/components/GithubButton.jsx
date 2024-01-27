import { Button } from "./ui/button";

const GithubButton = ({ handleGithubSignin }) => {
  return (
    <Button
      className="bg-black w-[130px] rounded-xl  text-sm dark:bg-[#da9c78] dark:text-black py-5 md:w-[225px] md:py-6 md:text-[15px] cursor-pointer z-10"
      onClick={() => handleGithubSignin()}
      size="sm"
    >
      <div className="flex space-x-1 select-none">
        <span className="hidden md:flex"> Sign in with </span>
        <span>Github</span>
      </div>
    </Button>
  );
};

export default GithubButton;
