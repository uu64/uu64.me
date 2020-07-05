import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const ALink: React.FC<Props> = (props: Props) => {
  const { href, children } = props;
  return (
    <>
      <a
        className="text-custom-normal"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    </>
  );
};

export default ALink;
