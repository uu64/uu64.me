import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const BlocoQuote = styled.blockquote`
  > p {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
`;

const ABlockquote: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <BlocoQuote className="border-l-8 border-gray-500 bg-gray-300 text-gray-700 px-4 mb-4">
      {children}
    </BlocoQuote>
  );
};

export default ABlockquote;
