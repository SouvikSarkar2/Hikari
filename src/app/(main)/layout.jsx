import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import DashboardNavbar from "@/components/DashboardNavbar";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession();
  if (!session) redirect("/");
  return (
    <>
      <div>
        <DashboardNavbar />

        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
