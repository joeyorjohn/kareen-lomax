// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import { HasuraAdapter } from "@auth/hasura-adapter";
import * as jsonwebtoken from "jsonwebtoken";

import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions = {
  providers: [
    // OAuth authentication providers
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email%20user-top-read%20ugc-image-upload%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public%20user-follow-modify%20user-library-modify",
    }),
  ],
  adapter: HasuraAdapter({
    endpoint: "https://kareen-self-care.hasura.app/v1/graphql",
    adminSecret:
      "gB6rtxGS8UV50nnN69rgS5DNH14nH1yM2Ajp1uhmCikNEOD6u93jgLan2YyuaDAW",
  }),
  secret: process.env.SECRET,
  session: { strategy: "jwt" },
  jwt: {
    encode: ({ secret, token }) => {
      const encodedToken = jsonwebtoken.sign(token, secret, {
        algorithm: "HS256",
      });
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jsonwebtoken.verify(token, secret, {
        algorithms: ["HS256"],
      });
      return decodedToken;
    },
  },
  callbacks: {
    // Add the required Hasura claims
    // https://hasura.io/docs/latest/graphql/core/auth/authentication/jwt/#the-spec
    async jwt({ token, account }) {
      if (account) {
        console.log(account);
        token.refreshToken = account.refresh_token;
        token.providerAccountId = account.providerAccountId;
      }

      return {
        ...token,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-default-role": "user",
          "x-hasura-role": "user",
          "x-hasura-user-id": token.sub,
        },
      };
    },
    // Add user ID to the session
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      session.refreshToken = token.refreshToken;
      session.providerAccountId = token.providerAccountId;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
