import React from "react";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

const MHead: React.FC<Props> = (props: Props) => {
  const { title, description } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default MHead;
