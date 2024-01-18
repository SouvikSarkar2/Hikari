import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import { Suspense } from "react";

export const metadata = {
  title: "HIKARI ",
  description: "A simple to do app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className="overflow-hidden bg-[#FEDBC5]">
        <Suspense fallback={<div>Loading...</div>}>
          <SessionProvider session={session}>{children}</SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}
