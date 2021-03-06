import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import customVerificationRequest from "../../../utils/customMail";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../services/prisma";

export default NextAuth({
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: ({
        identifier: email,
        url,
        token,
        baseUrl,
        provider,
      }) => {
        customVerificationRequest({
          identifier: email,
          url,
          token,
          baseUrl,
          provider,
        });
      },
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
});
