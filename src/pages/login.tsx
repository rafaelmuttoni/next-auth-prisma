import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

import LoginForm from "../components/LoginForm";

export default function Login() {
  return <LoginForm />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
