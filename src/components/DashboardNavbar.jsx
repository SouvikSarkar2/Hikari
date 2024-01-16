import { redirect, useRouter } from "next/navigation";
import SignoutButton from "./SignoutButton";
import { getServerSession } from "next-auth";

const DashboardNavbar = () => {
  return (
    <div className="bg-[#FEDBC5] h-[60px] flex items-center justify-between p-5">
      <SignoutButton />
    </div>
  );
};

export default DashboardNavbar;
