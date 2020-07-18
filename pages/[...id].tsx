import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import TPostsLayout from "@/components/templates/TPostsLayout";
import MdxUtil from "@/lib/MdxUtil";

interface Props {
  id: string | string[];
  frontMatter: FrontMatter;
}

const Post: React.FC<Props> = (props: Props) => {
  const { id, frontMatter } = props;
  const MDX = dynamic(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => import(`@/posts/${(id as string[]).join("/")}.mdx`) as any
  );
  return (
    <TPostsLayout
      frontMatter={frontMatter}
      path={`${(id as string[]).join("/")}`}
    >
      <MDX />
    </TPostsLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await MdxUtil.getPosts();
  const paths = posts.map((post): string => {
    return post.resourcePath;
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resourcePath = `/${(params.id as string[]).join("/")}`;
  const post = await MdxUtil.getPostByResourcePath(resourcePath);
  return {
    props: {
      id: params.id,
      frontMatter: post.frontMatter,
    },
  };
};

export default Post;
