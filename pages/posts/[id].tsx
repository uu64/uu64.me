import path from "path";
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import TPostsLayout from "@/components/templates/TPostsLayout";
import MdxUtil from "@/lib/MdxUtil";

interface Props {
  id: string;
  frontMatter: FrontMatter;
}

const Post: React.FC<Props> = (props: Props) => {
  const { id, frontMatter } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MDX = dynamic(() => import(`@/posts/${id}.mdx`) as any);
  return (
    <TPostsLayout frontMatter={frontMatter}>
      <MDX />
    </TPostsLayout>
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
  const post = await MdxUtil.getPostById(params.id as string);
  return {
    props: {
      id: params.id,
      frontMatter: post.frontMatter,
    }
  };
};

export default Post;