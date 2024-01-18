import { Button } from "./ui/button";

const GithubButton = ({ handleGithubSignin }) => {
  return (
    <Button
      className="w-[130px] rounded-xl  text-sm hover:bg-[#FEDBC5] hover:text-black py-5 md:w-[225px] md:py-6 md:text-[15px]"
      onClick={() => handleGithubSignin()}
      size="sm"
    >
      <div className="flex space-x-1">
        <span className="hidden md:flex"> Sign in with </span>
        <span>Github</span>
      </div>
    </Button>
  );
};

export default GithubButton;
