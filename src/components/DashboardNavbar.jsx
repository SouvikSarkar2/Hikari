import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SignoutButton from "./SignoutButton";
import { getServerSession } from "next-auth";
import ThemeSwitch from "./ThemeSwitch";

const DashboardNavbar = async () => {
  const session = await getServerSession();
  console.log(session);
  return (
    <div className="bg-[#FEDBC5] dark:bg-black h-[60px] flex items-center justify-between p-5">
      <SignoutButton />
      <div className="flex gap-6 items-center">
        <Avatar className="md:hidden">
          <AvatarImage src="" />
          <AvatarFallback>
            {session.user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <p className="hidden md:flex md:text-md md:font-semibold">
          {session.user.name.toUpperCase()}
        </p>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
