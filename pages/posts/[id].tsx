import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import TIndexLayout from "@/components/templates/TIndexLayout";
import MdxUtil from "@/lib/MdxUtil";
import path from "path";

interface Props {
  id: string;
}

const Post: React.FC<Props> = (props: Props) => {
  const { id } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MDX = dynamic(() => import(`@/posts/${id}.mdx`) as any);
  return (
    <TIndexLayout>
      <MDX />
    </TIndexLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts =  await MdxUtil.getPosts();
  const paths = posts.map((post): string => {
    return `/posts/${path.basename(post.filepath, ".mdx")}`;
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { id: params.id }
  };
};

export default Post;