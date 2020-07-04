import React from "react";
import MHead from "@/components/molecules/MHead";
import OIndexHeader from "@/components/organisms/OIndexHeader";
import blog from "@/data/blog.json";

interface Props {
  children: React.ReactNode;
}

const TIndexLayout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <div className="blog-index-content px-8">
      <MHead title={blog.title} description={blog.description} />
      <OIndexHeader />
      {children}
    </div>
  );
};

export default TIndexLayout;
