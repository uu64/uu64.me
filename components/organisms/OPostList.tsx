import React from "react";
import MPost, { IPostItem } from "@/components/molecules/MPost";

interface Props {
  posts: IPostItem[];
}

const OPostList: React.FC<Props> = (props: Props) => {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.resourcePath}>
          <MPost post={post} />
        </li>
      ))}
    </ul>
  );
};

export default OPostList;
