import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import prisma from "../../services/prisma";

type ChannelProps = {
  channel: {
    title: String;
  };
};

export default function Channel({ channel }: ChannelProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Carregando...</h1>;
  }

  return <h1>{channel.title}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const channels = await prisma.channel.findMany();

  const paths = channels.map((channel) => {
    return { params: { slug: channel.slug } };
  });

  return {
    paths,
    fallback: true,
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const channel = await prisma.channel.findUnique({
    where: { slug },
  });

  return {
    props: {
      channel,
    },
  };
};
