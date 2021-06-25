import {
  signIn as nextAuthSignIn,
  signOut as nextAuthSignOut,
  getSession,
  useSession,
} from "next-auth/client";

async function signIn(provider: string, email: string | null) {
  if (email) {
    const response = await nextAuthSignIn(provider, {
      email,
      redirect: false,
    });
    return response;
  }

  const response = await nextAuthSignIn(provider, {
    redirect: false,
  });
  return response;
}

function signOut() {
  nextAuthSignOut({ callbackUrl: `${process.env.NEXTAUTH_URL}/login` });
}

export { signIn, signOut, getSession, useSession };
