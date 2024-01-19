import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SignoutButton from "./SignoutButton";
import { getServerSession } from "next-auth";

const DashboardNavbar = async () => {
  const session = await getServerSession();
  console.log(session);
  return (
    <div className="bg-[#FEDBC5] h-[60px] flex items-center justify-between p-5">
      <SignoutButton />
      <Avatar className="md:hidden">
        <AvatarImage src="" />
        <AvatarFallback>
          {session.user.name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <p className="hidden md:flex md:text-md md:font-semibold">
        {session.user.name.toUpperCase()}
      </p>
    </div>
  );
};

export default DashboardNavbar;
