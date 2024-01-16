import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

export const metadata = {
  title: "HIKARI ",
  description: "A simple to do app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className="overflow-hidden bg-[#FEDBC5]">
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
