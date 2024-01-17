import { Button } from "./ui/button";

const GoogleButton = ({ handleGoogleSignin }) => {
  return (
    <Button
      className="w-[170px] rounded-xl  text-sm hover:bg-[#FEDBC5] hover:text-black py-5 md:w-[200px] md:py-7 md:text-[15px]"
      onClick={() => handleGoogleSignin()}
      size="sm"
    >
      {}Sign in With Google
    </Button>
  );
};

export default GoogleButton;
