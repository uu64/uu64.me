import React from "react";

interface Props {
  children: React.ReactNode;
}

const AInlineCode: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const inlineCodeSpacingStyle = { padding: "0.2em 0.4em" };
  return (
    <span
      className="bg-custom-night3 text-custom-snow0 font-mono text-sm rounded"
      style={inlineCodeSpacingStyle}
    >
      {children}
    </span>
  );
};

export default AInlineCode;
