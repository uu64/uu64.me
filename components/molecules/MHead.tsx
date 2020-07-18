import React from "react";
import Head from "next/head";
import blog from "@/data/blog.json";

interface Props {
  title: string;
  description: string;
  pageUrl: string;
  pageType: "article" | "website" | "profile";
  coverImage: string;
}

const MHead: React.FC<Props> = (props: Props) => {
  const { title, description, pageUrl, pageType, coverImage } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={pageType} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={coverImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="_uu64" />
      <meta property="og:site_name" content={blog.title} />
      <meta property="og:locale" content="ja_JP" />
    </Head>
  );
};

export default MHead;
