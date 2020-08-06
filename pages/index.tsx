import React from "react";
import { GetStaticProps } from "next";
import OPostList, { IPostItem } from "@/components/organisms/OPostList";
import TIndexLayout from "@/components/templates/TIndexLayout";
import mdxUtil from "@/lib/mdx-util";

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
  const posts = await mdxUtil.getPosts();
  return {
    props: {
      posts: posts.map(
        (post): IPostItem => {
          return {
            resourceId: post.resourceId,
            date: post.frontMatter.date,
            title: post.frontMatter.title,
          };
        }
      ),
    },
  };
};

export default PostList;
