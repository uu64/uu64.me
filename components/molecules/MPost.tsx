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
    <div className="py-4">
      <p className="py-2">{date}</p>
      <ANextLink href="/blog/[...id]" as={`/blog/${resourceId}`}>
        <a className="font-semibold text-custom-normal">
          <h2>{title}</h2>
        </a>
      </ANextLink>
    </div>
  );
};

export default MPost;
