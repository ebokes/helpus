import { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import urls from "./urls";

type UserType = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(urls.login, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirect to your login page
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user as UserType;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.user = user as UserType;
      return token;
    },
  },
};
