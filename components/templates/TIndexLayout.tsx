import React from "react";
import OIndexHeader from "@/components/organisms/OIndexHeader";

interface Props {
  children: React.ReactNode;
}

const TIndexLayout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <div className="blog-index-content px-8">
      <OIndexHeader />
      {children}
    </div>
  );
};

export default TIndexLayout;
