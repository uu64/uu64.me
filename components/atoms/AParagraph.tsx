import React from "react";

interface Props {
  children: React.ReactNode;
}

const AParagraph: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <p className="leading-relaxed py-2">{children}</p>;
};

export default AParagraph;
