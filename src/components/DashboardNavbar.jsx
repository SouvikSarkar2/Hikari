import { redirect, useRouter } from "next/navigation";
import SignoutButton from "./SignoutButton";
import { getServerSession } from "next-auth";

const DashboardNavbar = () => {
  return (
    <div>
      <SignoutButton />
    </div>
  );
};

export default DashboardNavbar;
