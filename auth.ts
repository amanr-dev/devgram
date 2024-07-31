import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { decode } from "jsonwebtoken";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // You need to provide a function here that will validate the credentials
        // Replace this with your own authentication logic

        const user = { id: 1, name: "John Smith", email: "jsmith@example.com" }; // Example user

        // Implement your own authentication logic here
        if (
          credentials.username === "jsmith" &&
          credentials.password === "password"
        ) {
          // If authentication is successful, return the user object
          return Promise.resolve(user);
        } else {
          // If authentication fails, return null
          return Promise.resolve(null);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Define your custom sign-in page here
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // async session({session, token}) {
    //   if (!session) {
    //     throw new Error('No session found');
    //   }
    //   session.user.id = token.id;
    //   return session;
    // }
  },
});
