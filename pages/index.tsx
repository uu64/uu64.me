import React from "react";
import { GetStaticProps } from "next";
import { IPostItem } from "@/components/molecules/MPost";
import OPostList from "@/components/organisms/OPostList";
import TIndexLayout from "@/components/templates/TIndexLayout";
import MdxUtil from "@/lib/MdxUtil";
import path from "path";

interface Props {
  posts: IPostItem[];
}

const PostList: React.FC<Props> = (props: Props) => {
  const { posts } = props;
  return (
    <TIndexLayout>
      <OPostList posts={posts} />
    </TIndexLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await MdxUtil.getPosts();
  return {
    props: {
      posts: posts.map((post): IPostItem => {
        return {
          resourcePath: `/posts/${path.basename(post.filepath, ".mdx")}`,
          date: post.frontMatter.date,
          title: post.frontMatter.title,
        };
      })
    }
  };
};

export default PostList;