import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { User } from "@/lib/models";
import { connectToDb } from "@/lib/util";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentails",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials.username;
        const password = credentials.password;
        /* console.log(credentials); */
        if (!credentials.username || !credentials.password) {
          return null;
        }
        await connectToDb();
        const dbUser = await User.find({ username });
        if (dbUser.length === 0) {
          throw new Error("Username Doesnt exists");
        }
        const isPasswordCorrect = await bcrypt.compare(
          password,
          dbUser[0].password
        );
        if (!isPasswordCorrect) {
          throw new Error("wrong credentials");
        }
        const user = { name: username, email: username };
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/auth/signin",
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
