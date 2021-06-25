import { GetServerSideProps } from "next";
import DashboardLayout from "../../layouts/Dashboard";
import { getSession } from "../../services/auth";

export default function Dashboard({ session }) {
  return <DashboardLayout session={session}>Dashboard</DashboardLayout>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
