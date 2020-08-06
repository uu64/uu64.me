import React from "react";
import MPost from "@/components/molecules/MPost";

export interface IPostItem {
  resourceId: string;
  date: string;
  title: string;
}

interface Props {
  posts: IPostItem[];
}

const OPostList: React.FC<Props> = (props: Props) => {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.resourceId}>
          <MPost
            resourceId={post.resourceId}
            date={post.date}
            title={post.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default OPostList;
