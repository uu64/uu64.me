import React from "react";
import ANextLink from "@/components/atoms/ANextLink";

interface Props {
  resourceId: string;
  date: string;
  title: string;
}

const MPost: React.FC<Props> = (props: Props) => {
  const { resourceId, date, title } = props;
  return (
    <ANextLink href="/blog/[...id]" as={`/blog/${resourceId}`}>
      <div className="p-4 cursor-pointer hover:bg-custom-night1">
        <p className="pb-2 text-custom-night3">{date}</p>
        <h2>{title}</h2>
      </div>
    </ANextLink>
  );
};

export default MPost;
