import React from "react";
import MSocialButtons from "@/components/molecules/MSocialButtons";

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
      <MSocialButtons />
    </div>
  );
};

export default OPostHeader;
