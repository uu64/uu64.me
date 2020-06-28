import React from "react";
import OIndexHeader from "@/components/organisms/OIndexHeader";

interface Props {
  children: React.ReactNode;
}

const TIndexLayout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <>
      <OIndexHeader />
      {children}
    </>
  );
};

export default TIndexLayout;
