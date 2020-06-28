import React from "react";
import ANextLink from "@/components/atoms/ANextLink";

interface Props {
  post: IPostItem;
}

export interface IPostItem {
  resourcePath: string;
  date: string;
  title: string;
}

const MPost: React.FC<Props> = (props: Props) => {
  const { post } = props;
  return (
    <div className="px-8 py-4">
      <p className="py-2 text-gray-600">{post.date}</p>
      <ANextLink href="/posts/[id]" as={post.resourcePath}>
        <a><h2>{post.title}</h2></a>
      </ANextLink>
    </div>
  );
};

export default MPost;
