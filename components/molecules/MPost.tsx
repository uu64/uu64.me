import React from "react";
import ANextLink from "@/components/atoms/ANextLink";

interface Props {
  resourcePath: string;
  date: string;
  title: string;
}

const MPost: React.FC<Props> = (props: Props) => {
  const { resourcePath, date, title } = props;
  return (
    <div className="px-8 py-4">
      <p className="py-2 text-gray-600">{date}</p>
      <ANextLink href="/[...id]" as={resourcePath}>
        <a className="font-semibold text-custom-normal">
          <h2>{title}</h2>
        </a>
      </ANextLink>
    </div>
  );
};

export default MPost;
