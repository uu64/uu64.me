import React from "react";

interface Props {
  children: React.ReactNode;
}

const ABlockquote: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <blockquote className="border-l-8 border-gray-500 bg-gray-300 text-gray-700 px-4">
      {children}
    </blockquote>
  );
};

export default ABlockquote;
