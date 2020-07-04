import React from "react";

interface Props {
  frontMatter: FrontMatter;
}

const OPostHeader: React.FC<Props> = (props: Props) => {
  const { frontMatter } = props;
  return (
    <div className="py-8">
      <div>{frontMatter.date}</div>
      <h1 className="border-b-2 border-gray-400 font-semibold text-custom-normal py-2">
        {frontMatter.title}
      </h1>
    </div>
  );
};

export default OPostHeader;
