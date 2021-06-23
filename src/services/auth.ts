import {
  signIn as nextAuthSignIn,
  signOut as nextAuthSignOut,
  getSession,
  useSession,
} from "next-auth/client";

type emailProps = {
  email: String;
};

function signIn(provider: string, email: emailProps | null) {
  if (email) {
    return nextAuthSignIn(provider, {
      email,
      callbackUrl: `${process.env.NEXTAUTH_URL}/dashboard`,
    });
  }

  return nextAuthSignIn(provider, {
    callbackUrl: `${process.env.NEXTAUTH_URL}/dashboard`,
  });
}

function signOut() {
  nextAuthSignOut({ callbackUrl: `${process.env.NEXTAUTH_URL}/login` });
}

export { signIn, signOut, getSession, useSession };
