import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";
import Cursor from "@/components/Cursor/Cursor";
import { Toaster } from "react-hot-toast";

export const metadata = {
  icons: {
    icon: "/hikari.svg",
  },
  title: "H i K a R I ",
  description: "A simple to do app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className="overflow-hidden bg-[#FEDBC5]">
        <Suspense fallback={<Loader />}>
          <Cursor />
          <Toaster />
          <SessionProvider session={session}>{children}</SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}
