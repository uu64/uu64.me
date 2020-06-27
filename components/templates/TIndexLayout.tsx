import React from "react";
import OIndexHeader from "@/components/organisms/OIndexHeader";

interface Props {
  children: React.ReactNode;
}

const TIndexLayout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <div className="app-content bg-custom-light">
      <div className="container mx-auto">
        <OIndexHeader />
        {children}
      </div>
    </div>
  );
};

export default TIndexLayout;
