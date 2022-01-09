import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import SpotifyProvider from "next-auth/providers/spotify";
//import { PrismaAdapter } from "@next-auth/prisma-adapter"
//import { PrismaClient } from "@prisma/client"

//const prisma = new PrismaClient()



export default NextAuth({
  // Configure one or more authentication providers

    providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      SpotifyProvider({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
      })
    ],
    jwt:{
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    },
    database: process.env.DATABASE_URL,
});

