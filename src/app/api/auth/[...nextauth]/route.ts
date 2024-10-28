/* eslint-disable  @typescript-eslint/no-explicit-any */

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { API_BACK } from "@/config";

const handler =  NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentialsEmailPass",
      name: 'CredentialsEmailPass',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log('============= CREDENTIALS GOOGLE | SESION LOGIN ==================');
        console.log(req);
        console.log('============= CREDENTIALS GOOGLE | SESION LOGIN ==================');

        try {
          const config = {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          }
          const res = await fetch(`${API_BACK}/auth/login`, config)
          const data = await res.json()

          if (res.ok && data) {
            return {
              email: credentials?.email,
              accessToken: data.token
            } as any
          }
          return null
        } catch (error: any) {
          console.log('=============== LOGIN ERROR ================');
          console.log(error);
          console.log('=============== LOGIN ERROR ================');
          return null
        }
      }
    }),
    CredentialsProvider({
      id: "credentialsGoogle",
      name: 'CredentialsGoogle',
      credentials: {
        token: { label: "token", type: "text" },
      },
      async authorize(credentials, req) {
        console.log('============= CREDENTIALS GOOGLE | SESION LOGIN ==================');
        console.log(req);
        console.log('============= CREDENTIALS GOOGLE | SESION LOGIN ==================');

        try {
          const token = credentials?.token || '';

          const userData = await fetch(`${API_BACK}/auth/me`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          })
          const data = await userData.json()
          if (userData.ok && data) {
            return {
              accessToken: token,
              ...data
            }
          }
          return null
        } catch (error: any) {
          console.log('=============== LOGIN ERROR ================');
          console.log(error);
          console.log('=============== LOGIN ERROR ================');
          return null
        }
      }
    })
  ],
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      try {
        const userData = await fetch(`${API_BACK}/auth/me`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.accessToken}`
          }
        })
        const data = await userData.json()

        if (data.message === 'Session expired') session.error = 'Session expired'
        else if (data.message === 'User data') {
          session.user.name = data.data.fullname
          session.user.roles = data.data.roles
          session.user.userID = data.data.id
          session.user.email = data.data.email
          session.user.image = data.data.imageUrl
          session.user.membership = data.data.membership
          session.accessToken = token.accessToken;
        } else session.error = 'Error al obtener los datos del usuario'

        return session;
      } catch (error) {
        session.error = "Error al obtener los datos del usuario"
        console.log('=============== SESSION ERROR ================');
        console.log(error);
        console.log('=============== SESSION ERROR ================');
        return session;
      }
    },
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.accessToken = user.accessToken
      }
      return token;
    }
  },
  cookies: {
    sessionToken: {
      name: `Authorization`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production", // Calculate minutes in max age
        maxAge: 60 * 60 * 7, // by 7 hours
      },
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/auth/error",
    error: '/auth/error',
  }
});

export { handler as GET, handler as POST }
